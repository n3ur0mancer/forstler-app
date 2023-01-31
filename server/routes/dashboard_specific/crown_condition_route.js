const express = require('express');
const router = express.Router();
const CrownConditionController = require('../../controllers/crown_condition_controller');

router.get('/:id', CrownConditionController.getDefoliationData);

module.exports = router;