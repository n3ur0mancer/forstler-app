const express = require('express');
const router = express.Router();
const WeatherDataController = require('../../controllers/weather_data_controller');

// Route to fetch the precipitation data by the id of its location
router.get('/:id', WeatherDataController.getPrecipitationData);

module.exports = router;