import React, {useState} from "react"
import MarkerMapComponent from "./components/RunMarkers"
import runData from "./data/data.json";
import './App.css';

function App() {
  const[runs] = useState(runData)

  return (
    <div className="App">
      <MarkerMapComponent />
  
    </div>
    
  );
}

export default App;
