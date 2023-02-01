const express = require('express');
const router = express.Router();

const LocationsListController = require('../../controllers/locations_list_controller');

// Route to get all locations
router.get('/all/', LocationsListController.getAllLocations);

// Route ot get a single location by its id
router.get('/:id', LocationsListController.getLocationById);

module.exports = router;
