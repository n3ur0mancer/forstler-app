const express = require('express');
const router = express.Router();

const viewLocationName = require('./shared_components/view_location_name_route');
const locationsList = require('./shared_components/locations_list_route');
// const soilCondition = require('./shared_components/soil_condition_route');
const map = require('./shared_components/map_route');
// const weatherData = require('./shared_components/weather_data_route');
const newLocation = require('./dashboard_specific/new_location_route');
const crownCondition = require('./dashboard_specific/crown_condition_route');


router.use('/location_name', viewLocationName);
router.use('/locations_list', locationsList);
router.use('/map', map);
// router.use('/soil_condition', soilCondition);
// router.use('/weather_data', weatherData);
router.use('/new_location', newLocation);
router.use('/crown_conditon', crownCondition);

module.exports = router;