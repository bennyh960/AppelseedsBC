import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Avatars() {
  const [people, setPeople] = useState([]);
  const [peopleArchive, setPeopleArchive] = useState([]);

  const [term, setTerm] = useState("");

  useEffect(() => {
    const callAPI = async () => {
      try {
        const { data } = await axios.get("https://randomuser.me/api/?results=10");
        // console.log(data.results);
        setPeople(data.results);

        setPeopleArchive(data.results);
      } catch (error) {
        console.log("Error");
      }
    };
    callAPI();
  }, []);

  // useEffect(() => {
  //   const newPeople = people.filter((person) => {
  //     if (person.name.first.includes(term)) {
  //       return person;
  //     }
  //   });
  //   setPeople(() => newPeople);
  // }, [term]);

  const drawPeople = () => {
    const filtredPeople = people.filter((p) => {
      return p.name.first.includes(term);
    });
    // console.log(filtredPeople);
    return filtredPeople.map((person) => {
      return (
        <div key={person.phone} style={{ display: "flex", flexDirection: "column" }}>
          {person.name.first + " " + person.name.last}
          <img src={person.picture.large} alt="" />
        </div>
      );
    });
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <div className="container" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {drawPeople()}
      </div>
    </div>
  );
}
