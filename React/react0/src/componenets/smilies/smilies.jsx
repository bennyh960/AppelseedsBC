import React, { Component } from "react";
import "./smilies.css";

export default class Smilies extends Component {
  render() {
    return (
      <div className="smilies-container">
        <div>smile2(dislike) : {this.props.dislike}</div>
        <div>smile1(like) : {this.props.like}</div>
      </div>
    );
  }
}
