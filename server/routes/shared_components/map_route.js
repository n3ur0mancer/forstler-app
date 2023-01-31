const express = require('express');
const router = express.Router();
const MapController = require('../../controllers/map_controller');

router.get('/:id', MapController.getLocationById);

module.exports = router;