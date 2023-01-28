const express = require('express');
const router = express.Router();

const locationsList = require('./shared_components/locations_list');
// const soilCondition = require('./shared_components/soil_condition');
const map = require('./shared_components/map');
// const weatherData = require('./shared_components/weather_data');
const newLocation = require('./dashboard_specific/new_location');
// const crownCondition = require('./dashboard_specific/crown_condition');

router.use('/locations_list', locationsList);
router.use('/map', map);
// router.use('/soil_condition', soilCondition);
// router.use('/weather_data', weatherData);
router.use('/new_location', newLocation);
// router.use('/crown_condition', crownCondition);

module.exports = router;