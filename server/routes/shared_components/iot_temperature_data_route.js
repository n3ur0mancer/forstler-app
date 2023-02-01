const express = require('express');
const router = express.Router();
const IotDataController = require('../../controllers/iot_data_controller');

// Route to fetch the precipitation data by the id of its location
router.get('/:id', IotDataController.getTemperatureData);

module.exports = router;