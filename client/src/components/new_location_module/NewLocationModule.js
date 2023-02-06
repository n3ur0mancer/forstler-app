import React, { useState, useEffect } from "react";
//import NewLocationInputField from './NewLocationInputField';
import Button from "../basic_components/button/Button";
//import Checkbox from '../basic_components/checkbox/Checkbox';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

import "./css/new_location_module.css";

function NewLoctionModule() {
  const [stateSelection, setStateSelection] = useState("berlin");

  const handleSelect = (event) => {
    const stateSelection = event.target.value;
    setStateSelection(stateSelection);
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
              control={<Checkbox />}
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
        <Button
          button_text="Bestätigen"
          button_style="green_button_new_location"
        />
      </div>
    </div>
  );
}

export default NewLoctionModule;

/* 
function NewLoctionModule() {
    return (
            <div className='new_location_module_container'>
                <h3 className='new_location_module_title'>Neuer Standort</h3>
                <NewLocationInputField input_field_name='Standort Name'/>
                <NewLocationInputField input_field_name='Ort'/>
                <div className='new_location_module_coordinates_container'>
                    <NewLocationInputField input_field_name='Längengrad'/>
                    <NewLocationInputField input_field_name='Breitengrad'/>
                </div>
                <Checkbox />
                <Button button_text='Bestätigen' button_style='green_button'/>
            </div>
    );
}

export default NewLoctionModule;
*/
