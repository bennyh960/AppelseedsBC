import React from "react";
import "../numbers/buttons.css";

class Buttons extends React.Component {
  state = { current: "" };
  getNum = (e) => {
    // console.dir(e.target.outerText);
    let isComma;
    if (this.state.current.length % 4 === 0) {
      isComma = ",";
    } else {
      isComma = "";
    }
    this.setState({ current: this.state.current + e.target.outerText + isComma });
  };
  delCurrent = () => {
    this.setState({ current: "" });
  };
  render() {
    return (
      <div>
        <div className="container-calculator">
          <div className="output">
            <div className="previous-oprand"></div>
            <div className="current-oprand">{this.state.current}</div>
          </div>
          <button className="span-two">AC</button>
          <button onClick={this.delCurrent}>Del</button>
          <button>÷</button>
          <button onClick={this.getNum}>1</button>
          <button onClick={this.getNum}>2</button>
          <button onClick={this.getNum}>3</button>
          <button>*</button>
          <button onClick={this.getNum}>4</button>
          <button onClick={this.getNum}>5</button>
          <button onClick={this.getNum}>6</button>
          <button>+</button>
          <button onClick={this.getNum}>7</button>
          <button onClick={this.getNum}>8</button>
          <button onClick={this.getNum}>9</button>
          <button>-</button>
          <button>.</button>
          <button onClick={this.getNum}>0</button>
          <button className="span-two2">=</button>
        </div>
      </div>
    );
  }
}

export default Buttons;
