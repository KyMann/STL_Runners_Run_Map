import React, {useState} from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import runData from "../data/data.json";

function RunMarkers() {
  var latlngs: [number, number] = [38.627, -90.33]
  const[viewport, setViewport] = useState({
    center: latlngs,
    zoom: 12,
    scrollWheelZoom: true,
    width: "100vw",
    height: "100vh",
  })

    return (
      <MapContainer {...viewport}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org /copyright">OpenStreetMap</a> contributors' 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
      <p>Hello</p>
      {runData.map((run) => <Marker key={run.Name} position={[run.Coordinates[0], run.Coordinates[1]]}><Popup>{run.Name}</Popup></Marker>)}
    </MapContainer>
    )
}

export default RunMarkers