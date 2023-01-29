import React, { useState, useEffect } from 'react';
import { Map, GeoJson, Marker } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';
import MapOverlay from './MapOverlay';
import './css/map_module.css';

const SERVER_URL = 'http://localhost:3001';

function MapModule(props) {
  const [setCenter] = useState(0)
  const [zoom, setZoom] = useState(13)
  const [locationLatitude, setLocationLatitude] = useState(0);
  const [locationLongitude, setLocationLongitude] = useState(0);
  const [iotLatitude, setIotLatitude] = useState(0);
  const [iotLongitude, setIotLongitude] = useState(0);
  const [mapFencing, setMapFencing] = useState(0);

  const location_id = props.location_id

  useEffect(() => {
    fetch(`${SERVER_URL}/dashboard/map/${props.location_id}`)
      .then(res => res.json())
      .then(data => {
        const locationLatitude = parseFloat(data.location_latitude);
        setLocationLatitude(locationLatitude);
        const locationLongitude = parseFloat(data.location_longitude);
        setLocationLongitude(locationLongitude);
        const iotLatitude = parseFloat(data.iot_latitude);
        setIotLatitude(iotLatitude);
        const iotLongitude = parseFloat(data.iot_longitude);
        setIotLongitude(iotLongitude);
        const mapFencing = (data.map_fencing);
        setMapFencing(mapFencing);
      })
  }, [props.location_id]);

  return (
    <Map
      provider={osm}
      center={[locationLatitude, locationLongitude]} 
      zoom={zoom} 
      attribution={false}
      className="map-border-radius"
      onBoundsChanged={({ zoom }) => { 
        setCenter([locationLatitude, locationLongitude]) 
        setZoom(zoom) 
      }} 
    >
    <GeoJson
      data={mapFencing}
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
        anchor={[iotLatitude, iotLongitude]} 
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
