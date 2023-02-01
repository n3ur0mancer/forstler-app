const express = require('express');
const router = express.Router();
const MapController = require('../../controllers/map_controller');

// Route to fetch the map data by the id of its location

router.get('/map/:id', MapController.getLocationById);

module.exports = router;