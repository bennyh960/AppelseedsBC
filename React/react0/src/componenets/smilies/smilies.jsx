import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceRollingEyes, faFaceKissWinkHeart } from "@fortawesome/free-solid-svg-icons";
import "./smilies.css";

export default class Smilies extends Component {
  render() {
    return (
      <div className="smilies-container">
        <div>
          {" "}
          <FontAwesomeIcon icon={faFaceRollingEyes} className="icon-yellow" />: {this.props.dislike}
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faFaceKissWinkHeart} className="icon-yellow" />: {this.props.like}
        </div>
      </div>
    );
  }
}
