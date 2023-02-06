const { Locations } = require("../models/locations");

// Controller to create a new location
exports.createNewLocation = async (req, res) => {
  const { locationName, locationLatitude, locationLongitude, stateSelection } =
    req.body;

  try {
    const newLocation = await Locations.create({
      location_name: locationName,
      location_latitude: locationLatitude,
      location_longitude: locationLongitude,
      location_state: stateSelection,
      country_code: "DE",
      iot_latitude: locationLatitude,
      iot_longitude: locationLongitude,
    });

    res.status(201).send({ message: "Location added successfully" });
  } catch (error) {
    res.status(400).send({ message: "Failed to add location", error });
  }
};
