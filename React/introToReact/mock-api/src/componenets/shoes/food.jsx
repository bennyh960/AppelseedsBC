import "./shoe.css";
import React, { Component } from "react";

export default class Food extends Component {
  render() {
    return (
      <div className="food">
        <div>{this.props.price}$</div>
        <img src={this.props.image} alt={this.props.price} />
      </div>
    );
  }
}
