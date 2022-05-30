import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ChuckNorris() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [isClicked, setClicked] = useState(false);
  const [category, setCategory] = useState("animal");

  useEffect(() => {
    const callAPI = async () => {
      try {
        const { data } = await axios.get("https://api.chucknorris.io/jokes/random?", {
          params: {
            category: category,
          },
        });
        // console.log(data);
        setJoke(data.value);
      } catch (error) {
        console.log("Error");
      }
    };
    callAPI();
  }, [isClicked]);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      try {
        const { data } = await axios.get("https://api.chucknorris.io/jokes/categories");
        // console.log(data);
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoriesAPI();
  }, []);

  const drawCatButtons = () => {
    return categories.map((category) => {
      return (
        <button
          key={category}
          onClick={() => {
            setClicked(!isClicked);
            setCategory(category);
          }}
        >
          {category}
        </button>
      );
    });
  };

  return (
    <div>
      {drawCatButtons()}
      <h2>{category}</h2>
      {joke}
    </div>
  );
}
