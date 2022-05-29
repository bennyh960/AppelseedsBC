import React, { useState } from "react";

export default function Marking() {
  const [arrOrigin, setArrOrigin] = useState(["one", "two", "three", "four", "five"]);
  const [arrEditable, setArrEditable] = useState(["one", "two", "three", "four", "five"]);
  const [checkedArr, setCheckedArr] = useState(arrEditable.map((i) => false));

  const reverseChecked = (isChecked, idx) => {
    checkedArr[idx] = !checkedArr[idx];
    setCheckedArr([...checkedArr]);
    // console.log(idx, checkedArr);
  };

  const drawCheckBox = () => {
    return arrEditable.map((num, idx) => {
      return (
        <div key={num}>
          <input
            type="checkbox"
            id={num}
            checked={checkedArr[idx]}
            onChange={(e) => {
              reverseChecked(e.target.checked, idx);
            }}
          />
          <label htmlFor={num}>{num}</label>
          <br />
        </div>
      );
    });
  };

  const deleteItems = () => {
    const newArr = arrEditable.filter((e, i) => {
      if (!checkedArr[i] === true) return e;
    });
    setArrEditable(newArr);
  };
  const resetItems = () => {
    setArrEditable(arrOrigin);
  };
  return (
    <div>
      <button onClick={deleteItems}>Delete</button>
      <button onClick={resetItems}>Reset</button>
      {drawCheckBox()}
    </div>
  );
}
