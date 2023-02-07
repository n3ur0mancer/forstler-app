const { Locations } = require("../models/locations");

// Controller to create a new location
exports.createNewLocation = async (req, res) => {
  const {
    locationName,
    locationLatitude,
    locationLongitude,
    stateSelection,
    iotLatitude,
    iotLongitude,
  } = req.body;

  try {
    const newLocation = await Locations.create({
      location_name: locationName,
      location_code: "DE-" + "AA-" + locationName.slice(0, 2),
      location_latitude: locationLatitude,
      location_longitude: locationLongitude,
      location_state: stateSelection,
      country_code: "DE",
      iot_latitude: iotLatitude,
      iot_longitude: iotLongitude,
      location_climate: "gemäßigt",
    });

    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
