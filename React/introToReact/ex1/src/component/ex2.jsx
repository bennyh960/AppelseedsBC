// import React from "react";

function exc2() {
  const data = ["hello", "world"].join(" ");
  const num1 = 5;
  const num2 = 6;
  const string = "I love React!";
  // const data = "bla bla bla";
  return (
    <div className="App">
      {data}
      <div>5 + 6 = {num1 + num2}</div>
      <div>The string’s length is {string.length}</div>
    </div>
  );
}

export default exc2;
