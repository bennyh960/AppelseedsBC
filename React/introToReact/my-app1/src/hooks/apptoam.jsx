import React, { useState, useEffect, useLayoutEffect } from "react";

export default function App() {
  const [state, setState] = useState([1, 2, 3]);

  const updateNum = () => {
    const newItems = [...state, state[state.length - 1] + 1];
    setState(newItems);
  };

  useLayoutEffect(() => {
    console.log("happend before layout on screen");
  }, []);
  useEffect(() => {
    console.log("mount");
    setState([...state, "x"]);
  }, []);
  //   useEffect(() => {
  //     console.log("mount due to state is in array of dependices and it update by click");
  //   }, [state]);
  return (
    <div>
      <button onClick={updateNum}>click</button>
      {state}
    </div>
  );
}
