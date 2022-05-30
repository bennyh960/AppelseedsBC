import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("");

  //   useEffect(() => {
  //     console.log("I ONLY RUN ONCE");
  //   }, []);
  //   useEffect(() => {
  //     console.log("I RUN at the begining and Each State of 'term' update");
  //   }, [term]);
  //   useEffect(() => {
  //     console.log("I RUN After every render and at initial render");
  //   });
  //   also i can console.log("I RUN everytime"); outside and it will run every rerender
  //   console.log("I RUN every render");

  useEffect(() => {});
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            type="text"
            className="input"
            id="input"
          />
        </div>
      </div>
    </div>
  );
}

//! useEffect sec arrgumant
// ? [] => run at initial render only
// ? nothing => at initial render and every rerender
// ? [data]=> at initial and after every rerender IF data has changed  since last render
