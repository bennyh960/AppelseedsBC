import React from "react";

export default class Colors extends React.Component {
  state = { favoriteColor: "green" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("newDiv").textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="newDiv"></div>
      </div>
    );
  }
}
