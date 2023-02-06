const { Locations } = require("../models/locations");

// Controller to create a new location
exports.createNewLocation = async (req, res) => {
  try {
    const location = await Locations.create(req.body);
    res.status(201).json(location);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
