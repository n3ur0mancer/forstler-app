const { Op } = require("sequelize");
const sequelize = require("sequelize");
const moment = require("moment");
const { CrownConditions } = require("../models/crown_conditions");
const { Locations } = require("../models/locations");

// Controller for the crown codition/ defoliation data (yearly)
exports.getDefoliationDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const data = await CrownConditions.findAll({
      attributes: [
        // Calculate and assign the average of the crown defoliation value
        [
          sequelize.fn("AVG", sequelize.col("defoliation_percentage")),
          "defoliation_percentage_avg",
        ],
        // Assigns to year
        [sequelize.fn("YEAR", sequelize.col("date_data_collection")), "year"],
      ],
      where: {
        // Filters by the corresponding location_code
        location_code: location.location_code,
        // Filters by the time period
        date_data_collection: {
          [Op.between]: [
            moment("2016-01-01").subtract(10, "years").toDate(),
            moment("2016-12-01").toDate(),
          ],
        },
      },
      // Groups data based on year
      group: ["year"],
    });

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
