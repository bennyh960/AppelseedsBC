import React from "react";
import data from "./data";
import Spinner from "./spinner";
import { Link } from "react-router-dom";

export default class Products extends React.Component {
  state = { products: [] };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ products: data });
    }, 500);
  }
  render() {
    if (this.state.products.length === 0) {
      return <Spinner />;
    }

    return (
      <ul>
        {console.log(this.props.location.pathname)}
        {this.state.products.map((pr) => {
          return (
            <li key={pr.id}>
              <Link to={`${this.props.location.pathname}/${pr.title}`}>{pr.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
