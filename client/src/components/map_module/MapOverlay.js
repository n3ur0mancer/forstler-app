import React, { useState, useEffect } from "react";
import arrow from "./assets/arrow_icon.svg";
import sunny_icon from "./assets/sunny_icon.svg";
import sunny_shadow_icon from "./assets/sunny-shadow_icon.svg";
import shadow_icon from "./assets/shadow_icon.svg";
import "./css/map_overlay.css";

function MapOverlay(props) {
  let icon;

  if (props.sunhours < 4) {
    icon = shadow_icon;
  } else if (props.sunhours >= 4 && props.sunhours <= 8) {
    icon = sunny_shadow_icon;
  } else {
    icon = sunny_icon;
  }

  return (
    <div className="map_overlay_container">
      <div className="elevation_container">
        <img src={arrow} className="elevation_image"></img>
        <p className="elevation_text">{props.elevation} m</p>
      </div>
      <div className="sun_hours_container">
        <img src={icon} className="sun_hours_image"></img>
        <p className="sun_hours_text">{props.sunhours} h</p>
      </div>
    </div>
  );
}

export default MapOverlay;
