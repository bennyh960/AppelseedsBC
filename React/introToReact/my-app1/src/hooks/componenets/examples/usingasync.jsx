import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("");

  // ! We cant use useeffect as async so for that we have 3 solutions
  useEffect(() => {
    //   *solution 1 call helper function inside the useeffect and invoke it there
    //   const search = async ()=>{
    //       await axios.get("url")
    //   }
    //   search()
    // * solution 2 is same with iifi function
    //   (async ()=>{
    //       await axios.get("url")
    //   })();
    // * Solution 3 is using promises instead async await
    // axios.get("url").then((response)=>{
    //     console.log(response.data);
    // })
  });

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
