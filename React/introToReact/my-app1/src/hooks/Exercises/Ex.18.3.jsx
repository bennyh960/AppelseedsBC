import React, { useState } from "react";

export default function TimeConversion() {
  const [sec, setSec] = useState(3600);
  const [min, setMin] = useState(60);
  const [hr, setHr] = useState(1);

  const handleChange = (e) => {
    if (e.target.id === "seconds") {
      setSec(e.target.value);
      setMin(e.target.value / 60);
      setHr(e.target.value / 60 / 60);
    }
    if (e.target.id === "minuts") {
      setSec(e.target.value * 60);
      setMin(e.target.value);
      setHr(e.target.value / 60);
    }
    if (e.target.id === "hours") {
      setSec(e.target.value * 3600);
      setMin(e.target.value * 60);
      setHr(e.target.value);
    }
  };
  return (
    <div>
      <form action="">
        <label htmlFor="seconds">Seconds:</label>
        <input
          type="number"
          id="seconds"
          value={sec}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="minuts">Minutes:</label>
        <input
          type="number"
          id="minuts"
          value={min}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          id="hours"
          value={hr}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
      </form>
    </div>
  );
}
