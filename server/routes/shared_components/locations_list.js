const express = require('express');
const router = express.Router();
const { Locations } = require('../../models/locations'); 


// Get all locations
router.get('/all/', async (req, res) => {
    try {
      const locations = await Locations.findAll();
      res.json(locations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// Get a single location by id
router.get('/:id', async (req, res) => {
    try {
      const location = await Locations.findByPk(req.params.id);
      if (location) {
        res.json(location);
      } else {
        res.status(404).json({ message: 'Location not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

module.exports = router;
