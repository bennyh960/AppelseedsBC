import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Homepage from "./homepage";
import Products from "./products";
import Header from "./header";
import "../componenents/style.css";
import data from "./data";

export default class AppEx extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          {/* <Switch> */}
          <Header />
          <Route path={"/"} exact component={Homepage} />
          <Route path={"/products"} component={Products} />
          <Route path={"/items/:product"} component={ProductDetail} />
          {/* <Route path={"*"}>
            <h1>404</h1>
          </Route> */}
          {/* </Switch> */}
        </BrowserRouter>
      </div>
    );
  }
}

class ProductDetail extends Component {
  state = { productObj: undefined };
  componentDidMount() {
    const productObj = data.filter((product) => product.title === this.props.match.params.product)[0];
    this.setState({ productObj: productObj }, () => {
      console.log(this.props);
    });
  }
  render() {
    if (this.state.productObj) {
      return (
        <>
          <button onClick={this.props.history.goBack}>back</button>
          <div className="products-container">
            <div className="product">
              <h3>{this.state.productObj.title}</h3>
              <img src={this.state.productObj.imageUrl} alt={this.state.productObj.title} />
              <div>Size:{this.state.productObj.size}</div>
              <div>Price:{this.state.productObj.price}</div>
            </div>
            <a href=""></a>
            {/* <Link to={this.props.history.goBack()}>Back</Link> */}
          </div>
        </>
      );
    }
  }
}
