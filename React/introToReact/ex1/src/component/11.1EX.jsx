import React from "react";

export default class ColorButtons extends React.Component {
  state = { colorToShow: null };

  onBtnClickp2 = (color) => {
    this.setState({ colorToShow: color });
  };
  render() {
    return (
      <div>
        <CustomButton onBtnClickP={this.onBtnClickp2} />
        <h2>The color selected is : {this.state.colorToShow}</h2>
      </div>
    );
  }
}

class CustomButton extends React.Component {
  onBtnClick = (color) => {
    this.props.onBtnClickP(color);
  };
  createButton = () => {
    const colors = ["blue", "red", "yellow"];
    return colors.map((color) => (
      <button
        onClick={() => {
          this.onBtnClick(color);
        }}
        key={color}
        style={{ backgroundColor: color }}
      >
        {color}
      </button>
    ));
  };
  render() {
    return <div>{this.createButton()}</div>;
  }
}
