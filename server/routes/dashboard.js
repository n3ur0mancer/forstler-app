const express = require('express');
const router = express.Router();

const viewLocationName = require('./shared_components/view_location_name_route');
const locationsList = require('./shared_components/locations_list_route');
const map = require('./shared_components/map_route');
const crownCondition = require('./dashboard_specific/crown_condition_route');
const regionalWeatherData = require('./shared_components/regional_weather_data_routes');
const iotTemperatureData = require('./shared_components/iot_weather_data_routes');
const soilCondition = require('./shared_components/soil_condition_route');
const newLocation = require('./dashboard_specific/new_location_route');

router.use('/', viewLocationName);
router.use('/', locationsList);
router.use('/', map);
router.use('/', crownCondition);
router.use('/', regionalWeatherData);
router.use('/', iotTemperatureData);
router.use('/', soilCondition);
router.use('/', newLocation);

module.exports = router;