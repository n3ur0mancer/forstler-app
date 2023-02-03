const express = require('express');
const router = express.Router();
const TreeRecommendationListController = require('../../controllers/tree_recommendation_list_controller');

// Route to fetch the crown condition data by the id of the location (yearly)
router.get('/tree_recommendations/:id', TreeRecommendationListController.getTreeRecommendations);

module.exports = router;