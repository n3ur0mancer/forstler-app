const express = require('express');
const router = express.Router();
const soilConditionController = require('../../controllers/regional_soil_data_controller');

// Route to get the soil condition data for a location
router.get('/soil_condition_data/:id', soilConditionController.getSoilData);

module.exports = router;
