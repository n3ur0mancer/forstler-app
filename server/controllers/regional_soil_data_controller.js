const sequelize = require("sequelize");

const { Locations } = require("../models/locations");
const { RegionalSoilData } = require("../models/regional_soil_data");

exports.getSoilData = async (req, res) => {
  try {
    // Get the id of the selected location
    const locationId = req.params.id;

    // Find the selected location
    const selectedLocation = await Locations.findOne({
      where: {
        id: locationId,
      },
    });

    // Get the location's coordinates
    const locationLatitude = selectedLocation.location_latitude;
    const locationLongitude = selectedLocation.location_longitude;

    // Find the nearest soil_composition location
    const nearestSoilComposition = await RegionalSoilData.findOne({
      order: sequelize.literal(`
          ST_Distance_Sphere(
            POINT(${locationLongitude}, ${locationLatitude}),
            POINT(longitude, latitude)
          )
        `),
    });

    // Get the silt_content, sand_content and clay_content of the nearest soil_composition location
    const siltContent = nearestSoilComposition.silt_content;
    const sandContent = nearestSoilComposition.sand_content;
    const clayContent = nearestSoilComposition.clay_content;

    const soilComposition = (() => {
      if (siltContent >= sandContent && sandContent > clayContent) {
        return "Schlickig, sandiger Boden";
      } else if (siltContent >= clayContent && clayContent > sandContent) {
        return "Schlickig, lehmiger Boden";
      } else if (sandContent >= siltContent && siltContent > clayContent) {
        return "Sandig, schlickiger Boden";
      } else if (sandContent >= clayContent && clayContent > siltContent) {
        return "Sandig, lehmiger Boden";
      } else if (clayContent >= siltContent && siltContent > sandContent) {
        return "Lehmig, schlickiger Boden";
      } else if (siltContent >= clayContent && clayContent >= sandContent) {
        return "Schlickig, sandiger Boden";
      } else {
        return "Lehmig, sandiger Boden";
      }
    })();

    // Return the result
    res.status(200).json({
      data: [
        {
          clay: clayContent,
          sand: sandContent,
          silt: siltContent,
          soil_composition: soilComposition,
        },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
