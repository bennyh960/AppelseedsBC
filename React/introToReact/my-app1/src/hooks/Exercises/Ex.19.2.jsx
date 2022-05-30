import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Countries() {
  const [countries, SetCountries] = useState([]);
  const [filtered, setFilter] = useState("");
  useEffect(() => {
    const getAPI = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      //   console.log(data);
      const filteredCountry = data.filter((country) => {
        if (country.name.official.toLowerCase().includes(filtered.toLowerCase())) {
          return country;
        }
      });
      if (filtered) {
        SetCountries(filteredCountry);
      } else {
        SetCountries(data);
      }
    };

    getAPI();
  }, [filtered]);

  const drawCountries = () => {
    return (
      <ul>
        {countries.map((country) => {
          return <li key={country.name.official}>{country.name.official}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <input
        value={filtered}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {drawCountries()}
    </div>
  );
}
