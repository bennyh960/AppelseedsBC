import React from "react";
import data from "./data";
import Spinner from "./spinner";
import { Link } from "react-router-dom";

export default class Products extends React.Component {
  state = { products: [] };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ products: data });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div>
          {this.state.products.length <= 0 && <Spinner />}
          <ShowProductsDetail productArr={this.state.products} />
        </div>
      </div>
    );
  }
}

function ShowProductsDetail(props) {
  return (
    <div className="products-container">
      {/* {console.log(props)}; */}
      {props.productArr.map((product) => {
        return (
          <Link to={"items/" + product.title} key={product.id}>
            <div className="product">
              <h3>{product.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
