import React from "react";
import "./Anim8.2.css";

export default class BoxAnimation extends React.Component {
  //   state = { widthA: 0, widthB: 0, widthC: 0 };
  state = { display: "none" };
  componentDidMount() {
    setTimeout(() => {
      //   this.setState({ widthA: 100, widthB: 60, widthC: 80 });
      this.setState({ display: "flex" });
    }, 100);
  }
  componentDidUpdate() {
    setTimeout(() => {
      //   this.setState({ widthA: 0, widthB: 0, widthC: 0 });
      this.setState({ display: "none" });
    }, 3000);
  }
  render() {
    return (
      <div style={{ height: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div className="box" style={{ height: 100, width: 100, display: this.state.display }}></div>
        <div className="box" style={{ height: 50, width: 60, display: this.state.display }}></div>
        <div className="box" style={{ height: 20, width: 80, display: this.state.display }}></div>
      </div>
    );
  }
}
