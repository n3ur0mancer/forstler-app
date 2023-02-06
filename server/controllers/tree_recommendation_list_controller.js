const sequelize = require("sequelize");
const moment = require("moment");
const { Op } = require("sequelize");
const { RegionalSoilData } = require("../models/regional_soil_data");
const {
  RegionalAverageMonthlyPrecipitationGermany,
} = require("../models/regional_average_monthly_precipitation_germany");
const {
  RegionalAverageMonthlySunhoursGermany,
} = require("../models/regional_average_monthly_sunhours_germany");
const { Locations } = require("../models/locations");
const { Trees } = require("../models/trees");

exports.getTreeRecommendations = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    const soilData = await RegionalSoilData.findOne({
      order: sequelize.literal(`
        ST_Distance_Sphere(
          POINT(${location.location_longitude}, ${location.location_latitude}),
          POINT(longitude, latitude)
        )
      `),
    });

    const sunhoursData = await RegionalAverageMonthlySunhoursGermany.findAll({
      attributes: [
        [sequelize.fn("AVG", sequelize.col("sunhours")), "sunhours_avg"],
        [sequelize.fn("YEAR", sequelize.col("date")), "year"],
      ],
      where: {
        state: location.location_state,
        date: {
          [Op.between]: [
            moment("2016-01-01").toDate(),
            moment("2016-12-01").toDate(),
          ],
        },
      },
      group: ["year"],
    });

    const sunhours =
      Math.round(((sunhoursData[0].dataValues.sunhours_avg * 12) / 365) * 10) /
      10;

    const precipitationData =
      await RegionalAverageMonthlyPrecipitationGermany.findAll({
        attributes: [
          [
            sequelize.fn("AVG", sequelize.col("precipitation_mm")),
            "precipitation_mm_avg",
          ],
          [sequelize.fn("YEAR", sequelize.col("date")), "year"],
        ],
        where: {
          state: location.location_state,
          date: {
            [Op.between]: [
              moment("2016-01-01").toDate(),
              moment("2016-12-01").toDate(),
            ],
          },
        },
        group: ["year"],
      });

    const precipitation =
      Math.round(precipitationData[0].dataValues.precipitation_mm_avg * 10) /
      10;

    const recommendedTrees = await Trees.findAll({
      where: {
        tree_clay_tolerance: { [Op.gte]: soilData.clay_content },
        tree_sand_tolerance: { [Op.gte]: soilData.sand_content },
        tree_silt_tolerance: { [Op.gte]: soilData.silt_content },
        tree_min_light_hours: { [Op.lte]: sunhours },
        tree_min_precipitation_mm_month: { [Op.lte]: precipitation },
        tree_preferred_climate: location.location_climate,
      },
    });

    res.status(200).json({
      recommendedTrees,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
