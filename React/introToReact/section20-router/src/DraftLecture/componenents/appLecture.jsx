import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Homepage from "./homepage";
import Products from "./products";
import Header from "./header";
import ProductDetails from "./productDetails";
import "../componenents/style.css";
// import data from "./data";

export default class AppLec extends Component {
  state = { homeLink: "/", productLink: "/products" };
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          {/* <Switch> */}
          <Header homeLink={this.state.homeLink} productLink={this.state.productLink} />
          <Route path={this.state.homeLink} exact component={Homepage} />
          <Route path={this.state.productLink} exact component={Products} />
          <Route path={`${this.state.productLink}/:title`} component={ProductDetails} />
          {/* <Route>
              <ErrorPage />
            </Route> */}
          {/* </Switch> */}
        </BrowserRouter>
      </div>
    );
  }
}

function ErrorPage(params) {
  return <div>Error 404</div>;
}
