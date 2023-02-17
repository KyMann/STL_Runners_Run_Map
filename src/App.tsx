import React, {useState} from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './App.css';

function App() {
  var latlngs: [number, number] = [38.627, -90.33]
  
  const[viewport, setViewport] = useState({
    center: latlngs,
    zoom: 12,
    scrollWheelZoom: true,
    width: "100vw",
    height: "100vh",
  })
  
  return (
    <div className="App">
      <MapContainer {...viewport}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org /copyright">OpenStreetMap</a> contributors' 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <Marker position={latlngs}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable
          </Popup>
        </Marker>
      </MapContainer>

    
    </div>
    
  );
}

export default App;
