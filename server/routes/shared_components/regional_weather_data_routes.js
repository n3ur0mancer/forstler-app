const express = require('express');
const router = express.Router();
const weatherDataController = require('../../controllers/regional_weather_data_controller');

// Route to fetch the sunhour data by the id of its location (yearly)
router.get('/regional_sunhours/:id', weatherDataController.getSunhoursDataYearly);

// Route to fetch the sunhour data by the id of its location (yearly)
router.get('/regional_sunhours/single/:id', weatherDataController.getSingleSunhoursDataYearly);

// Route to fetch the temperature data by the id of its location (yearly)
router.get('/regional_temperature/:id', weatherDataController.getTemperatureDataYearly);

// Route to fetch the precipitation data by the id of its location (yearly)
router.get('/regional_precipitation/:id', weatherDataController.getPrecipitationDataYearly);

module.exports = router;