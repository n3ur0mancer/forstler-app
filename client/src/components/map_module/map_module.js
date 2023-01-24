import React, { useState } from 'react';
import { Map } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';

export function Map_module(props) {
  
  const [center, setCenter] = useState([47.781, -12.3176])
  const [zoom, setZoom] = useState(13)
  const latitude = props.latitude;
  const longitude = props.longitude;

  return (
    <Map  
      provider={osm}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ zoom }) => { 
        setCenter([latitude, longitude]) 
        setZoom(zoom) 
      }} 
    />

  )
}

export default Map_module;