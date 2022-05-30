import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StarWars() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films");
      console.log(data.results);
      setMovie(data.results);
      //   setDir(data.results.director);
    };

    callApi();
  }, []);

  const drawOnRender = () => {
    return movies.map((movie) => {
      return (
        <div key={movie.title}>
          <h1>Title : {movie.title}</h1>
          <h3>Director: {movie.director}</h3>
          <br />
        </div>
      );
    });
  };

  return <div>{drawOnRender()}</div>;
}
