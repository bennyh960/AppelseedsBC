import React from "react";
// import "./Anim8.2.css";

export default class ChangingBox extends React.Component {
  state = { r: 250, g: 0, b: 0, color: "rgb(250,0,0)", radius: "0" };

  componentDidMount() {
    setInterval(() => {
      //   console.log(this.state.r, this.state.g, this.state.b);
      this.setState({ r: this.state.r - 10, g: this.state.g + 50, b: this.state.b + 30 });
    }, 250);
    setTimeout(() => {
      this.setState({ radius: "50%" });
    }, 2500);
  }
  componentDidUpdate() {
    setInterval(() => {
      this.setState({ color: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})` });
      if (this.state.g > 250) {
        this.setState({ g: 0 });
      }
      if (this.state.b > 250) {
        this.setState({ b: 0 });
      }
      if (this.state.r < 10) {
        this.setState({ r: 250 });
      }
    }, 250);
  }
  render() {
    return (
      <div
        style={{ height: 200, width: 200, backgroundColor: this.state.color, borderRadius: this.state.radius }}
      ></div>
    );
  }
}
