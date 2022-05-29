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
    // solutuion one;
    // arr[i] = { name: arr[i].name, completed: !arr[i].completed };
    // setArr([...arr]);
    //solution 2
    setArr((prev) => {
      return prev.map((t, index) => {
        if (i === index) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
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
