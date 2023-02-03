const express = require('express');
const router = express.Router();
const viewLocationNameController = require('../../controllers/view_location_name_controller');

router.get('/location_name/:id', viewLocationNameController.getLocationName);

module.exports = router;