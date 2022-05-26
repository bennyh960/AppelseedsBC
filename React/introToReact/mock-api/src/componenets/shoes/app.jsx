import React, { Component } from "react";
import shoeAPI from "../api/shoeAPI";
import Food from "./food";
import "./style.css";

export default class AppFood extends Component {
  state = { dataArr: [] };
  componentDidMount = async () => {
    const { data } = await shoeAPI.get();
    this.setState({ dataArr: data }, () => {
      console.log(this.state.dataArr);
    });
  };

  drawDataUI = () => {
    return this.state.dataArr.map((f) => {
      return (
        <div key={f.id}>
          <Food price={f.price} image={f.image} />
        </div>
      );
    });
  };
  render() {
    return <div>{this.drawDataUI()}</div>;
  }
}
