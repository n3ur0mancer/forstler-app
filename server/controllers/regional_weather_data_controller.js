const { Op } = require("sequelize");
const sequelize = require("sequelize");
const moment = require("moment");
const { Locations } = require("../models/locations");
const {
  RegionalAverageMonthlyTemperatureGermany,
} = require("../models/regional_average_monthly_temperature_germany");
const {
  RegionalAverageMonthlyPrecipitationGermany,
} = require("../models/regional_average_monthly_precipitation_germany");
const {
  RegionalAverageMonthlySunhoursGermany,
} = require("../models/regional_average_monthly_sunhours_germany");

// Controller for the temperature data (yearly)
exports.getTemperatureDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const regional = await RegionalAverageMonthlyTemperatureGermany.findAll({
      attributes: [
        // Calculate and assign the average of the temperature values
        [
          sequelize.fn("AVG", sequelize.col("temperature_celsius")),
          "temperature_celsius_avg",
        ],
        // Assigns to year
        [sequelize.fn("YEAR", sequelize.col("date")), "year"],
      ],
      where: {
        // Filters by the corresponding location_code
        state: location.location_state,
        // Filters by the time period
        date: {
          [Op.between]: [
            moment("2016-01-01").subtract(10, "years").toDate(),
            moment("2016-12-01").toDate(),
          ],
        },
      },
      // Groups data based on year
      group: ["year"],
    });

    res.status(200).json({ regional });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller for the temperature data (monthly)
exports.getTemperatureDataMonthly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const regional = await RegionalAverageMonthlyTemperatureGermany.findAll({
      attributes: [
        [
          sequelize.fn("AVG", sequelize.col("temperature_celsius")),
          "temperature_celsius_avg",
        ],
        [sequelize.fn("MONTH", sequelize.col("date")), "month"],
      ],
      where: {
        state: location.location_state,
        date: {
          [Op.between]: [
            moment("2016-01-01").toDate(),
            moment("2017-01-01").toDate(),
          ],
        },
      },
      group: ["month"],
      order: [["month", "ASC"]],
    });

    res.status(200).json({ regional });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller for the sunhours data (yearly)
exports.getSunhoursDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const regional = await RegionalAverageMonthlySunhoursGermany.findAll({
      attributes: [
        [sequelize.fn("AVG", sequelize.col("sunhours")), "sunhours_avg"],
        [sequelize.fn("YEAR", sequelize.col("date")), "year"],
      ],
      where: {
        state: location.location_state,
        date: {
          [Op.between]: [
            moment("2016-01-01").subtract(10, "years").toDate(),
            moment("2016-12-01").toDate(),
          ],
        },
      },
      group: ["year"],
    });

    res.status(200).json({ regional });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Controller for the sunhours data (monthly)
exports.getSunhoursDataMonthly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const regional = await RegionalAverageMonthlySunhoursGermany.findAll({
      attributes: [
        [sequelize.fn("AVG", sequelize.col("sunhours")), "sunhours_avg"],
        [sequelize.fn("MONTH", sequelize.col("date")), "month"],
      ],
      where: {
        state: location.location_state,
        date: {
          [Op.between]: [
            moment("2016-01-01").toDate(),
            moment("2017-01-01").toDate(),
          ],
        },
      },
      group: ["month"],
      order: [["month", "ASC"]],
    });

    res.status(200).json({ regional });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Controller for the sunhours data (last year)
exports.getSingleSunhoursDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const data = await RegionalAverageMonthlySunhoursGermany.findAll({
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
      Math.round(((data[0].dataValues.sunhours_avg * 12) / 365) * 10) / 10;

    res.status(200).json({ sunhours });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Controller for the precipitation data (yearly)
exports.getPrecipitationDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const regional = await RegionalAverageMonthlyPrecipitationGermany.findAll({
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
            moment("2016-01-01").subtract(10, "years").toDate(),
            moment("2016-12-01").toDate(),
          ],
        },
      },
      group: ["year"],
    });

    res.status(200).json({ regional });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Controller for the precipitation data (monthly)
exports.getPrecipitationDataMonthly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    const regional = await RegionalAverageMonthlyPrecipitationGermany.findAll({
      attributes: [
        [
          sequelize.fn("AVG", sequelize.col("precipitation_mm")),
          "precipitation_mm_avg",
        ],
        [sequelize.fn("MONTH", sequelize.col("date")), "month"],
      ],
      where: {
        state: location.location_state,
        date: {
          [Op.between]: [
            moment("2016-01-01").toDate(),
            moment("2017-01-01").toDate(),
          ],
        },
      },
      group: ["month"],
      order: [["month", "ASC"]],
    });

    res.status(200).json({ regional });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
