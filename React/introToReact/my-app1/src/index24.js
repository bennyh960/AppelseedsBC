// Import react and react dom libaries
import React from "react";
import ReactDOM from "react-dom";

// just example that i can call a function inside the component
function btn() {
  return "click me from func";
}

// Create a react component
const App = () => {
  //   const buttonText = "Click Me";
  //   const buttonText = 123;
  //   const buttonText = ["Click Me", "ok"];
  const buttonText = { text: "click me" };
  const style = { backgroundColor: "red", color: "white", border: "1px solid black" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter a name:
      </label>
      <input id="name" type="text"></input>
      {/* <button style={{ backgroundColor: "red", color: "white" }}>{buttonText}</button>will produce error if i will call buttonText obj */}
      {/* <button style={style}>{buttonText.text}</button> */}
      <button style={{ backgroundColor: "red", color: "white" }}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
