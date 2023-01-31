const express = require('express');
const router = express.Router();
const { Locations } = require('../../models/locations'); 


// Create new location
router.post('/add', async (req, res) => {
  try {
    const location = await Locations.create(req.body);
    res.status(201).json(location);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;