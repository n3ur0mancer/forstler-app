const express = require('express');
const router = express.Router();
const CrownConditionController = require('../../controllers/crown_condition_controller');

// Route to fetch the crown condition data by the id of the location
router.get('/:id', CrownConditionController.getDefoliationData);

module.exports = router;