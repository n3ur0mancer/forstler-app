import React, { useState, useEffect, onSelect } from "react";
import LocationListItem from "./LocationListItem";
import "./css/location_module.css";

const SERVER_URL = "http://localhost:3001";

function LocationModule(props) {
  // Initializing the states
  const [locations, setLocations] = useState([]);

  // Fetch all the existing locations
  useEffect(() => {
    fetch(`${SERVER_URL}/dashboard/locations_list/all`)
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.log(err));
  }, []);

  // Re-fetch all the existing locations when state of fetchNewLocations change
  useEffect(() => {
    if (props.fetchNewLocations) {
      fetch(`${SERVER_URL}/dashboard/locations_list/all`)
        .then((res) => res.json())
        .then((data) => setLocations(data))
        .catch((err) => console.log(err));
    }
  }, [props.fetchNewLocations]);

  // Pass down the callback function prop
  return (
    <div className="location_module_layout">
      <h3 className="location_module_title">Standorte</h3>
      {locations.map((location, index) => (
        <LocationListItem
          key={index}
          location_name_text={location.location_name}
          location_place_text={location.country_code}
          onClick={() => props.onSelect(location.id)}
        />
      ))}
    </div>
  );
}

export default LocationModule;
