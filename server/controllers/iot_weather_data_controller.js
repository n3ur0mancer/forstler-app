const { Op } = require('sequelize');
const sequelize = require('sequelize');
const moment = require('moment');
const {IotMeteorologicalData} = require('../models/iot_meteorological_data');
const {Locations} = require('../models/locations');


// Controller for the crown codition/ defoliation data (yearly)

exports.getTemperatureDataYearly = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const data = await IotMeteorologicalData.findAll({
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
          [Op.between]: [moment("2016-01-01").subtract(12, 'years').toDate(), moment("2016-12-01").toDate()]
        },
      },
      // Groups data based on year
      group: ['year'],
    });

    res.status(200).json({ data });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};