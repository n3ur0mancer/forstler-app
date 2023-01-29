const express = require('express');
const router = express.Router();

const viewLocationName = require('./shared_components/view_location_name');
const locationsList = require('./shared_components/locations_list');
// const soilCondition = require('./shared_components/soil_condition');
const map = require('./shared_components/map');
// const weatherData = require('./shared_components/weather_data');
// const newTree = require('../guide_specific/new_tree');
// const treeRecommendationList = require('../guide_specific/tree_recommendation_list');


router.use('/location_name', viewLocationName);
router.use('/locations_list', locationsList);
router.use('/map', map);
// router.use('/soil_condition', soilCondition);
// router.use('/weather_data', weatherData);
// router.use('/new_tree', newTree);
// router.use('/tree_recommendation_list', treeRecommendationList);

module.exports = router;