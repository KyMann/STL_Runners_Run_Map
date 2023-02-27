import React, {useState} from "react"
import MarkerMapComponent from "./components/MapAndMarkers"
import FilterBar from "./components/FilterBar";
import runData from "./data/data.json";
import './App.css';

function App() {
  const[runs] = useState(runData)

  return (
    <div className="App">
      <FilterBar />
      <MarkerMapComponent />
  
    </div>
    
  );
}

export default App;
