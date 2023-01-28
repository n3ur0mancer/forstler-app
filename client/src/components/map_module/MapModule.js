import React, { useState } from 'react';
import { Map, GeoJson, Marker } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';
import MapOverlay from './MapOverlay';

import './css/map_module.css';

const map_fencing_sample = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              13.473120172777612,
              52.4815108462862
            ],
            [
              13.482273336660768,
              52.485829899363324
            ],
            [
              13.482212719681797,
              52.48749096071265
            ],
            [
              13.477787680187674,
              52.4883030123201
            ],
            [
              13.476635957581038,
              52.48963179170235
            ],
            [
              13.473786959549471,
              52.49110816615553
            ],
            [
              13.462633435346447,
              52.49439292150075
            ],
            [
              13.459905671275777,
              52.49051762232176
            ],
            [
              13.467543410675404,
              52.48571915970999
            ],
            [
              13.473120172777612,
              52.4815108462862
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}


function MapModule(props) {
  
  const [center, setCenter] = useState([47.781, -12.3176])
  const [zoom, setZoom] = useState(13)
  const latitude = props.latitude;
  const longitude = props.longitude;

  const marker_latitude = props.marker_latitude;
  const marker_longitude = props.marker_longitude;

  return (
    <Map
      provider={osm}
      center={center} 
      zoom={zoom} 
      attribution={false}
      className="map-border-radius"
      onBoundsChanged={({ zoom }) => { 
        setCenter([latitude, longitude]) 
        setZoom(zoom) 
      }} 
    >
    <GeoJson
      data={map_fencing_sample}
      styleCallback={(feature, hover) => {
        return {
          fill: "#B1D4C850",
          strokeWidth: "2.5",
          stroke: "#3F6659",
          r: "20"
        };
      }}
    />
    <Marker 
        width={20}
        anchor={[marker_latitude, marker_longitude]} 
        color="#3F6659" 
      >
    </Marker>
    
    <MapOverlay 
    elevation={props.elevation}
    sun_hours={props.sun_hours} 
    />
    </Map>
  );
}

export default MapModule;