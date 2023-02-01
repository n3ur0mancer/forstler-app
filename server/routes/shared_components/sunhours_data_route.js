const express = require('express');
const router = express.Router();
const WeatherDataController = require('../../controllers/weather_data_controller');

// Route to fetch the sunhour data by the id of its location
router.get('/:id', WeatherDataController.getSunhoursData);

// Route to fetch the sunhour data by the id of its location
router.get('/single/:id', WeatherDataController.getSingleSunhoursData);

module.exports = router;