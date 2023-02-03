const express = require('express');
const router = express.Router();
const weatherDataController = require('../../controllers/regional_weather_data_controller');

// Route to fetch the temperature data by the id of its location (yearly)
router.get('/regional_temperature/:id', weatherDataController.getTemperatureDataYearly);

// Route to fetch the temperature data by the id of its location (monthly)
router.get('/regional_temperature_monthly/:id', weatherDataController.getTemperatureDataMonthly);

// Route to fetch the sunhour data by the id of its location (yearly)
router.get('/regional_sunhours/:id', weatherDataController.getSunhoursDataYearly);

// Route to fetch the sunhour data by the id of its location (monthly)
router.get('/regional_sunhours_monthly/:id', weatherDataController.getSunhoursDataMonthly);

// Route to fetch the sunhour data by the id of its location (last year)
router.get('/regional_sunhours_single/:id', weatherDataController.getSingleSunhoursDataYearly);

// Route to fetch the precipitation data by the id of its location (yearly)
router.get('/regional_precipitation/:id', weatherDataController.getPrecipitationDataYearly);

// Route to fetch the precipitation data by the id of its location (monthly)
router.get('/regional_precipitation_monthly/:id', weatherDataController.getPrecipitationDataMonthly);

module.exports = router;