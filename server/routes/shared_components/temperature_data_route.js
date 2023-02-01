const express = require('express');
const router = express.Router();
const WeatherDataController = require('../../controllers/weather_data_controller');

// Route to fetch the temperature data by the id of its location
router.get('/:id', WeatherDataController.getTemperatureData);

module.exports = router;