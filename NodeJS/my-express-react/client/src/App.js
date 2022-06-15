import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import express from "express";

function App() {
  const [beData, setData] = useState([]);
  const [city, setCity] = useState("");
  const [cityS, setCityS] = useState("");

  useEffect(() => {
    const getApi = async () => {
      const dataFromBE = await axios.get(`http://localhost:5000/api/${cityS}`);
      // const dataFromBE = await axios.get("https://goweather.herokuapp.com/weather/ashkelon");
      // setData(data.data);
      setData(dataFromBE.data);
    };
    getApi();
  }, [cityS]);

  const handleSub = (e) => {
    e.preventDefault();
    setCityS(city);
  };
  return (
    <div>
      Hi React
      <div>{beData}</div>
      <form onSubmit={(e) => handleSub(e)}>
        <label>City:</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
