import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import "./buttns.css";
// import

export default class Buttns extends Component {
  render() {
    return (
      <div className="buttns-container">
        <button onClick={this.props.disLikeClick}>
          Dislike
          <span> </span>
          <FontAwesomeIcon icon={faThumbsDown} className="icon-red" />
        </button>
        <button onClick={this.props.likeClick}>
          <FontAwesomeIcon icon={faThumbsUp} className="icon-blue" /> Like
        </button>
      </div>
    );
  }
}
