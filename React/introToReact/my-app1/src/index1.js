// Import react and react dom libaries
import React from "react";
import ReactDOM from "react-dom";

// just example that i can call a function inside the component
function btn() {
  return "click me from func";
}

// Create a react component
const App = () => {
  const buttonText = "Click Me";
  return (
    <div>
      <label className="label" for="name">
        Enter a name:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "red", color: "white" }}>{buttonText}</button>
      <button style={{ backgroundColor: "green", color: "white" }}>{btn()}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
