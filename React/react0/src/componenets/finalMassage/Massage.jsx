import React, { Component } from "react";
import "./massage.css";

export default class Massage extends Component {
  render() {
    return (
      <div className="massage">
        {this.props.like > this.props.dislike && (
          <div>
            <h1>Its seems that you like our shoes please visist Our Website</h1>
            <a href="https://precious-heliotrope-1b4fcd.netlify.app">Shopme.il</a>
          </div>
        )}
        {this.props.like <= this.props.dislike && (
          <div>
            <h1>Its seems like you will not buy from us, goodluck.</h1>
          </div>
        )}
        <button onClick={this.props.restart}>Try again</button>
      </div>
    );
  }
}
