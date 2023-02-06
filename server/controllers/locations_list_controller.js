const { Locations } = require("../models/locations");

// Controller for the location data of all the locations

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Locations.findAll();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller for the location data by location id

exports.getLocationById = async (req, res) => {
  try {
    const location = await Locations.findByPk(req.params.id);
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ message: "Location not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
