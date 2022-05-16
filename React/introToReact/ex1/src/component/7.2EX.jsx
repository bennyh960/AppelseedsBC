import React from "react";

export default class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "hide", display: "flex" };
  }
  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          margin: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            if (this.state.name === "show") {
              this.setState({ name: "hide" });
              this.setState({ display: "flex" });
            } else if (this.state.name === "hide") {
              this.setState({ name: "show" });
              this.setState({ display: "none" });
            }
          }}
        >
          {this.state.name}
        </button>
        <div style={{ display: this.state.display }}>
          <Box />
        </div>
      </div>
    );
  }
}

function Box() {
  return <div style={{ width: 300, height: 300, backgroundColor: "yellow", margin: "auto" }}></div>;
}
