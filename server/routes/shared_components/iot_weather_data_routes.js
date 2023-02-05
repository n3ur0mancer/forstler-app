const express = require('express');
const router = express.Router();
const iotDataController = require('../../controllers/iot_weather_data_controller');

// Route to fetch the IoT temperature data by the id of its location (yearly)
router.get('/iot_temperature/:id', iotDataController.getTemperatureDataYearly);

// Route to fetch the IoT temperature data by the id of its location (yearly)
router.get('/iot_temperature_monthly/:id', iotDataController.getTemperatureDataMonthly);

// Route to fetch the IoT humidity data by the id of its location (yearly)
router.get('/iot_humidity/:id', iotDataController.getHumidityDataYearly);

// Route to fetch the IoT humidity data by the id of its location (yearly)
router.get('/iot_humidity_monthly/:id', iotDataController.getHumidityDataMonthly);

// Route to fetch the IoT precipitation data by the id of its location (yearly)
router.get('/iot_precipitation/:id', iotDataController.getPrecipitationDataYearly);

// Route to fetch the IoT precipitation data by the id of its location (yearly)
router.get('/iot_precipitation_monthly/:id', iotDataController.getPrecipitationDataMonthly);

// Route to fetch the IoT precipitation data by the id of its location (yearly)
router.get('/iot_sunhours/:id', iotDataController.getSunhoursDataYearly);

// Route to fetch the IoT precipitation data by the id of its location (yearly)
router.get('/iot_sunhours_monthly/:id', iotDataController.getSunhoursDataMonthly);

module.exports = router;