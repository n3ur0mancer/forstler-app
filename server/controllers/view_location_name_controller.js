const { Locations } = require("../models/locations");

// Get a the name and country code of a single location by id
exports.getLocationName = async (req, res) => {
  try {
    const location = await Locations.findByPk(req.params.id, {
      attributes: ["location_name", "country_code"],
    });
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ message: "Location not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
