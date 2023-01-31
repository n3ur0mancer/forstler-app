const { Locations } = require('../models/locations'); 

// Get a coordinates, marker postion, location fencing of a single location and its IoT module by id
exports.getLocationById = async (req, res) => {
  try {
    const location = await Locations.findByPk(req.params.id, { attributes: ['location_latitude', 'location_longitude','iot_latitude','iot_longitude','map_fencing'] });
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};