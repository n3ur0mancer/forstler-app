import React, { useState } from 'react';
import { Map } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';

export function Map_module() {
  const [center, setCenter] = useState([52.488, 13.4672])
  const [zoom, setZoom] = useState(13)
  return (
    
    <Map  
      provider={osm}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    />

  )
}

export default Map_module;