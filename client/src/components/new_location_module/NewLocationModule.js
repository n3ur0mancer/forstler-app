import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

import "./css/new_location_module.css";

const SERVER_URL = "http://localhost:3001";

function NewLoctionModule() {
  const [stateSelection, setStateSelection] = useState("berlin");
  const [locationName, setLocationName] = useState("");
  const [locationLatitude, setLocationLatitude] = useState("");
  const [locationLongitude, setLocationLongitude] = useState("");
  const [useCoordinates, setUseCoordinates] = useState(false);

  const handleSelect = (event) => {
    setStateSelection(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setUseCoordinates(event.target.checked);
  };

  const handleButtonClick = async () => {
    const data = {
      locationName: locationName,
      stateSelection: stateSelection,
      locationLatitude: locationLatitude,
      locationLongitude: locationLongitude,
    };
    if (useCoordinates) {
      data.iotLatitude = locationLatitude;
      data.iotLongitude = locationLongitude;
    }
    try {
      const response = await fetch(`${SERVER_URL}/dashboard/new_location`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new_location_module_container">
      <h3 className="new_location_module_title">Neuer Standort</h3>
      <div className="new_location_form_container">
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="location-name"
            label={
              <Typography
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "Lexend",
                  color: "#5E5E5E",
                }}
              >
                Name des Orts
              </Typography>
            }
            variant="standard"
            size="small"
            sx={{
              width: "18vw",
            }}
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
          />
          <div className="coordinates_container">
            <TextField
              id="latitude"
              label={
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "Lexend",
                    color: "#5E5E5E",
                  }}
                >
                  Breitengrad
                </Typography>
              }
              variant="standard"
              size="small"
              sx={{
                width: "8.5vw",
              }}
              value={locationLatitude}
              onChange={(event) => setLocationLatitude(event.target.value)}
            />
            <TextField
              id="longitude"
              label={
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "Lexend",
                    color: "#5E5E5E",
                  }}
                >
                  Längengrad
                </Typography>
              }
              variant="standard"
              size="small"
              sx={{
                marginLeft: 1,
                width: "8.5vw",
              }}
              value={locationLongitude}
              onChange={(event) => setLocationLongitude(event.target.value)}
            />
          </div>
          <div className="selection-container">
            <Select
              id="state-selection"
              onChange={handleSelect}
              value={stateSelection}
              size="small"
              sx={{
                width: "8vw",
                fontSize: "0.8rem",
                color: "#5E5E5E",
              }}
            >
              <MenuItem value="berlin">Berlin</MenuItem>
              <MenuItem value="brandenburg">Brandenburg</MenuItem>
              <MenuItem value="baden_wuerttemberg">Baden-Wuerttemberg</MenuItem>
              <MenuItem value="bayern">Bayern</MenuItem>
              <MenuItem value="hessen">Hessen</MenuItem>
              <MenuItem value="mecklenburg_vorpommern">
                Mecklenburg-Vorpommern
              </MenuItem>
              <MenuItem value="niedersachsen">Niedersachsen</MenuItem>
              <MenuItem value="niedersachsen_hamburg_bremen">
                Niedersachen, Hamburg, Bremen
              </MenuItem>
              <MenuItem value="nordrhein_westfalen">
                Nordrhein-Westfalen
              </MenuItem>
              <MenuItem value="rheinland_pfalz">Rehinland-Pfalz</MenuItem>
              <MenuItem value="schleswig_holstein">Schleswig-Holstein</MenuItem>
              <MenuItem value="saarland">Saarland</MenuItem>
              <MenuItem value="sachsen">Sachsen</MenuItem>
              <MenuItem value="sachsen_anhalt">Sachsen-Anhalt</MenuItem>
              <MenuItem value="thueringen">Thüringen</MenuItem>
            </Select>
            <FormControlLabel
              control={
                <Checkbox
                  checked={useCoordinates}
                  onChange={handleCheckboxChange}
                />
              }
              label={
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "Lexend",
                    color: "#5E5E5E",
                  }}
                >
                  Iot Modul
                </Typography>
              }
              sx={{
                marginRight: "3vw",
                fontSize: "0.6rem",
              }}
            />
          </div>
        </Box>
        <button
          className="green_button_new_location"
          onClick={handleButtonClick}
        >
          Bestätigen
        </button>
      </div>
    </div>
  );
}

export default NewLoctionModule;
