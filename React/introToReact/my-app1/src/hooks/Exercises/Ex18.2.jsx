import React, { useState } from "react";

const todoArr = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

export default function Todo() {
  const [arr, setArr] = useState(todoArr);
  const handleClick = (i) => {
    // console.log(i);
    arr[i] = { name: arr[i].name, completed: !arr[i].completed };
    setArr([...arr]);
  };
  const renderAllMissions = () => {
    return arr.map((m, i) => {
      return (
        <h2 onClick={() => handleClick(i)} key={m.name}>
          {m.completed && <del>{m.name + " " + m.completed}</del>}
          {!m.completed && <div>{m.name + " " + m.completed}</div>}
        </h2>
      );
    });
  };

  return (
    <div>
      <div>{renderAllMissions()}</div>
      {/* <div>world</div> */}
    </div>
  );
}
