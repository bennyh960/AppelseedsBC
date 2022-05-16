import React from "react";

class CounterButtons extends React.Component {
  render() {
    return <Container />;
  }
}

function Container(props) {
  return (
    <div
      style={{
        display: "flex",
        width: 400,
        height: 400,
        border: "1px solid black",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Form />
    </div>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, color: null };
  }
  color() {
    if (this.state.num > 0) {
      this.setState({ color: "green" });
    } else if (this.state.num < 0) {
      this.setState({ color: "red" });
    } else if (this.state.num === 0) this.setState({ color: "black" });
  }
  render() {
    return (
      <form>
        <label style={{ color: this.state.color }}>Number : {this.state.num}</label>
        <br />
        <button
          type="button"
          onClick={() => {
            if (this.state.num > -10) {
              this.color();
              this.setState({ num: this.state.num - 1 });
            }
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            if (this.state.num < 10) {
              this.color();
              this.setState({ num: this.state.num + 1 });
            }
          }}
        >
          +
        </button>
      </form>
    );
  }
}

export default CounterButtons;
