import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import express from "express";

function App() {
  const [beData, setData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const dataFromBE = await axios.get("http://localhost:5000/api");
      // const dataFromBE = await axios.get("https://goweather.herokuapp.com/weather/ashkelon");
      // setData(data.data);
      setData(dataFromBE.data);
    };
    getApi();
  }, []);
  return (
    <div>
      Hi React
      <div>{beData}</div>
    </div>
  );
}

export default App;
