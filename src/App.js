import React,{useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import {baseURL, API_KEY} from "./constants"
import NasaPhoto from "./components/NasaPhoto";

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(`${baseURL}?api_key=${API_KEY}`)
    .then(res => {
      setNasaData(res.data);
      
    })
    .catch(err => console.error(err))
  },[])

  return (
    <div className="App">
      {nasaData && <NasaPhoto photo={nasaData}/>}
    </div>
  );
}

export default App;
