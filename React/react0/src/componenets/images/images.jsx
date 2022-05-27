import React, { Component } from "react";
import "./images.css";

export default class Images extends Component {
  render() {
    return (
      <div className="image">
        <div>{this.props.name}</div>
        <img width={"60%"} height={"80%"} src={this.props.image} alt="" />
      </div>
    );
  }
}
