import React, { Component } from "react";
import data from "./data";

export default class ShopingInventory extends Component {
  state = { cayegoryArr: undefined, showInventory: true, inputVal: undefined };
  componentDidMount() {
    // this.setState({ cayegoryArr: makeProductTitleArray(data) });
  }

  onInventoryCheck = () => {
    this.setState({ showInventory: !this.state.showInventory }, () => {});
  };

  onSearchBar = (e) => {
    // console.log(e);
    this.setState({ inputVal: e.toLowerCase() });
  };
  render() {
    return (
      <div>
        <SearchBar searchBarInput={this.onSearchBar} />
        <CheckBox checkInventory={this.onInventoryCheck} />
        <DataToShow showInventory={this.state.showInventory} inputField={this.state.inputVal} />
      </div>
    );
  }
}

function SearchBar(props) {
  return (
    <form action="">
      <label htmlFor="search">Search product: </label>
      <input
        id="search"
        type="text"
        onChange={(e) => {
          props.searchBarInput(e.target.value);
        }}
      />
    </form>
  );
}

function CheckBox(props) {
  return (
    <form action="">
      <input id="checkbox" type="checkbox" onChange={props.checkInventory} />
      <label htmlFor="search">Show inventory only. </label>
    </form>
  );
}

// ============== data=================

function setIntoCategory(data) {
  const obj = {};
  data.forEach((product) => {
    if (!obj[product.category]) {
      obj[product.category] = [product];
    } else {
      obj[product.category].push(product);
    }
  });

  return obj;
}

function DataToShow(props) {
  const dataObj = setIntoCategory(data);
  const arr = [];
  for (let cat in dataObj) {
    arr.push(
      <React.Fragment key={cat}>
        <Category name={cat} />
        {dataObj[cat].map((p) => {
          if (p.name.toLowerCase().includes(props.inputField)) {
            if (props.showInventory) {
              return <Product name={p.name} price={p.price} key={p.name} />;
            } else {
              if (p.stocked) return <Product name={p.name} price={p.price} key={p.name} />;
            }
          } else {
            return "";
          }
        })}
      </React.Fragment>
    );
  }
  return <div>{arr}</div>;
}

function Category({ name }) {
  return <h5 className="category">{name}</h5>;
}

function Product({ name, price }) {
  return (
    <div>
      {name} {price}
    </div>
  );
}
