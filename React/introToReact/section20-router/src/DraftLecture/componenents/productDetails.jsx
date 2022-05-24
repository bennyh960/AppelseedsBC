import React, { Component } from "react";
import data from "./data";
import { Link } from "react-router-dom";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.product = data.find((pr) => pr.title === this.props.match.params.title);
  }

  render() {
    console.log(this.props);
    return (
      <div className="product">
        <h3>{this.product.title}</h3>
        <img src={this.product.imageUrl} alt={this.product.title} />
        <div>Price:{this.product.price}</div>
        <div>Size:{this.product.size}</div>
        <button onClick={this.props.history.goBack}>back for cool like me</button>
        <Link to="/products">Back for maafnim</Link>
      </div>
    );
  }
}
