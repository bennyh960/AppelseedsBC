// Import react and react dom libaries
import React from "react";
import ReactDOM from "react-dom";
// rfc

// just example that i can call a function inside the component

// Create a react component
const App = () => {
  const buttonText = { text: "click me" };
  const style = { backgroundColor: "red", color: "white", border: "1px solid black" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter a name:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "red", color: "white" }}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
