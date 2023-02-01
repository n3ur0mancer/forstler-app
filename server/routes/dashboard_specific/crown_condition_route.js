const express = require('express');
const router = express.Router();
const CrownConditionController = require('../../controllers/crown_condition_controller');

// Route to fetch the crown condition data by the id of the location (yearly)
router.get('/crown_condition/:id', CrownConditionController.getDefoliationDataYearly);

module.exports = router;