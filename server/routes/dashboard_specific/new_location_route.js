const express = require('express');
const router = express.Router();
const NewLocationController = require('../../controllers/new_location_controller');

// Route to create new location
router.post('/new_location', NewLocationController.createNewLocation);

module.exports = router;