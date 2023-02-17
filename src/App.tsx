import React, {useState} from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './App.css';

function App() {
  var latlngs: [number, number] = [51.505, -0.09]
  
  const[viewport, setViewport] = useState({
    center: latlngs,
    zoom: 13,
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
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable
          </Popup>
        </Marker>
      </MapContainer>

    
    </div>
    
  );
}

export default App;
