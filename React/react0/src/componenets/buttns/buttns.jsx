import React, { Component } from "react";
import "./buttns.css";

export default class Buttns extends Component {
  render() {
    return (
      <div className="buttns-container">
        <button onClick={this.props.disLikeClick}>Dislike</button>
        <button onClick={this.props.likeClick}>Like</button>
      </div>
    );
  }
}
