import React, { useState, useEffect } from 'react';
import arrow from './assets/arrow_icon.svg';
import sunny_icon from './assets/sunny_icon.svg';
import './css/map_overlay.css';

function MapOverlay(props) {

    return (
            <div className="map_overlay_container">
                <div className="elevation_container">
                    <img src={arrow} className="elevation_image"></img>
                    <p className="elevation_text">{props.elevation} m</p>
                </div>
                <div className="sun_hours_container">
                    <img src={sunny_icon} className="sun_hours_image"></img>
                    <p className="sun_hours_text">{props.sunhours} h</p>
                </div>
            </div>
    );
}

export default MapOverlay;