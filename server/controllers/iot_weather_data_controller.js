const { Op } = require('sequelize');
const sequelize = require('sequelize');
const moment = require('moment');
const {IotMeteorologicalData} = require('../models/iot_meteorological_data');
const {Locations} = require('../models/locations');


// Controller for the IoT temperature (yearly)
exports.getTemperatureDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        // Calculate and assign the average of the crown defoliation value
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_temperature_avg'],
        // Assigns to year
        [sequelize.fn('YEAR', sequelize.col('date_observation')), 'year'],
      ],
      where: {
        // Filters by the corresponding location_code
        location_code: location.location_code,
        measurement_type: 'air_temperature_celsius',
        // Filters by the time period
        date_observation: {
          [Op.between]: [moment("2016-01-01").subtract(10, 'years').toDate(), moment("2016-12-01").toDate()]
        },
      },
      // Groups data based on year
      group: ['year'],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


// Controller for the IoT temperature (monthly)
exports.getTemperatureDataMonthly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_temperature_avg'],
        [sequelize.fn('MONTH', sequelize.col('date_observation')), 'month'],
      ],
      where: {
        location_code: location.location_code,
        measurement_type: 'air_temperature_celsius',
        date_observation: {
          [Op.between]: [moment("2016-01-01").toDate(), moment("2017-01-01").toDate()]
        },
      },
      group: ['month'],
      order: [['month', 'ASC']],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


// Controller for the IoT relative air humidity (yearly)
exports.getHumidityDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_humidity_avg'],
        [sequelize.fn('YEAR', sequelize.col('date_observation')), 'year'],
      ],
      where: {
        location_code: location.location_code,
        measurement_type: 'relative_air_humidity',
        date_observation: {
          [Op.between]: [moment("2016-01-01").subtract(10, 'years').toDate(), moment("2016-12-01").toDate()]
        },
      },
      group: ['year'],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


// Controller for the IoT relative air humidity (monthly)
exports.getHumidityDataMonthly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_humidity_avg'],
        [sequelize.fn('MONTH', sequelize.col('date_observation')), 'month'],
      ],
      where: {
        location_code: location.location_code,
        measurement_type: 'relative_air_humidity',
        date_observation: {
          [Op.between]: [moment("2016-01-01").toDate(), moment("2017-01-01").toDate()]
        },
      },
      group: ['month'],
      order: [['month', 'ASC']],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


// Controller for the IoT precipitation (yearly)
exports.getPrecipitationDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_precipitation_avg'],
        [sequelize.fn('YEAR', sequelize.col('date_observation')), 'year'],
      ],
      where: {
        location_code: location.location_code,
        measurement_type: 'precipitation_mm',
        date_observation: {
          [Op.between]: [moment("2016-01-01").subtract(10, 'years').toDate(), moment("2016-12-01").toDate()]
        },
      },
      group: ['year'],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


// Controller for the IoT precipitation (monthly)
exports.getPrecipitationDataMonthly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_precipitation_avg'],
        [sequelize.fn('MONTH', sequelize.col('date_observation')), 'month'],
      ],
      where: {
        location_code: location.location_code,
        measurement_type: 'precipitation_mm',
        date_observation: {
          [Op.between]: [moment("2016-01-01").toDate(), moment("2017-01-01").toDate()]
        },
      },
      group: ['month'],
      order: [['month', 'ASC']],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};



// Controller for the IoT sunhours (yearly)
exports.getSunhoursDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_sunhours_avg'],
        [sequelize.fn('YEAR', sequelize.col('date_observation')), 'year'],
      ],
      where: {
        location_code: location.location_code,
        measurement_type: 'sunhours',
        date_observation: {
          [Op.between]: [moment("2016-01-01").subtract(10, 'years').toDate(), moment("2016-12-01").toDate()]
        },
      },
      group: ['year'],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


// Controller for the IoT sunhours (monthly)
exports.getSunhoursDataMonthly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const iot = await IotMeteorologicalData.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('daily_mean')), 'iot_sunhours_avg'],
        [sequelize.fn('MONTH', sequelize.col('date_observation')), 'month'],
      ],
      where: {
        location_code: location.location_code,
        measurement_type: 'sunhours',
        date_observation: {
          [Op.between]: [moment("2016-01-01").toDate(), moment("2017-01-01").toDate()]
        },
      },
      group: ['month'],
      order: [['month', 'ASC']],
    });

    res.status(200).json({ iot });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};