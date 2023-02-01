const express = require('express');
const router = express.Router();
const iotDataController = require('../../controllers/iot_weather_data_controller');

// Route to fetch the precipitation data by the id of its location (yearly)
router.get('/iot_temperature/:id', iotDataController.getTemperatureDataYearly);

module.exports = router;