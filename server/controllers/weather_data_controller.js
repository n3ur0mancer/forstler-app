const { Op } = require('sequelize');
const sequelize = require('sequelize');
const moment = require('moment');
const {Locations} = require('../models/locations');
const {RegionalAverageMonthlyTemperatureGermany} = require('../models/regional_average_monthly_temperature_germany');
const {RegionalAverageMonthlyPrecipitationGermany} = require('../models/regional_average_monthly_precipitation_germany');
const {RegionalAverageMonthlySunhoursGermany} = require('../models/regional_average_monthly_sunhours_germany');


// Controller for the temperature data

exports.getTemperatureData = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    const data = await RegionalAverageMonthlyTemperatureGermany.findAll({
      attributes: [
        // Calculate and assign the average of the temperature values
        [sequelize.fn('AVG', sequelize.col('temperature_celsius')), 'temperature_celsius_avg'],
        // Assigns to year
        [sequelize.fn('YEAR', sequelize.col('date')), 'year'],
      ],
      where: {
        // Filters by the corresponding location_code
        state: location.location_state,
        // Filters by the time period
        date: {
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

// Controller for the sunhours data

exports.getSunhoursData = async (req, res) => {
    const locationId = req.params.id;
  
    try {
      const location = await Locations.findByPk(locationId);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      const data = await RegionalAverageMonthlySunhoursGermany.findAll({
        attributes: [
          // Calculate and assign the average of the sunhour values
          [sequelize.fn('AVG', sequelize.col('sunhours')), 'sunhours_avg'],
          // Assigns to year
          [sequelize.fn('YEAR', sequelize.col('date')), 'year'],
        ],
        where: {
          // Filters by the corresponding location_code
          state: location.location_state,
          // Filters by the time period
          date: {
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

// Controller for the sunhours data of last, passed year

exports.getSingleSunhoursData = async (req, res) => {
    const locationId = req.params.id;
  
    try {
      const location = await Locations.findByPk(locationId);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      const data = await RegionalAverageMonthlySunhoursGermany.findAll({
        attributes: [
          // Calculate and assign the average of the sunhour values
          [sequelize.fn('AVG', sequelize.col('sunhours')), 'sunhours_avg'],
          // Assigns to year
          [sequelize.fn('YEAR', sequelize.col('date')), 'year'],
        ],
        where: {
          // Filters by the corresponding location_code
          state: location.location_state,
          // Filters by the time period
          date: {
            [Op.between]: [moment("2016-01-01").toDate(), moment("2016-12-01").toDate()]
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

// Controller for the precipitation data

exports.getPrecipitationData = async (req, res) => {
    const locationId = req.params.id;
  
    try {
      const location = await Locations.findByPk(locationId);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      const data = await RegionalAverageMonthlyPrecipitationGermany.findAll({
        attributes: [
          // Calculate and assign the average of the precipitation values
          [sequelize.fn('AVG', sequelize.col('precipitation_mm')), 'precipitation_mm_avg'],
          // Assigns to year
          [sequelize.fn('YEAR', sequelize.col('date')), 'year'],
        ],
        where: {
          // Filters by the corresponding location_code
          state: location.location_state,
          // Filters by the time period
          date: {
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
