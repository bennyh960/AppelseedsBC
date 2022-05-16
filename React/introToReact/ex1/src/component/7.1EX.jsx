import React from "react";

class IncrementButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ num: this.state.num + 1 });
          }}
        >
          Increment
        </button>
        <span>{this.state.num}</span>
      </div>
    );
  }
}

export default IncrementButton;
