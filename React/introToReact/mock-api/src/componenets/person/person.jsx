import React, { Component } from "react";
import "./person.css";

export default class Person extends Component {
  state = { nameVal: "" };
  handleChange = ({ target }) => {
    this.setState({ nameVal: target.value });
  };

  handleEditclick = () => {
    this.props.handleEditClick(this.props.id, this.state.nameVal);
  };

  render() {
    return (
      <div className="person">
        <div>{this.props.name + " " + this.props.last} </div>
        <img src={this.props.img} alt={this.props.name} />
        <div className="button-ed">
          <button onClick={this.handleEditclick}>Edit</button>
          <button
            onClick={(e) => {
              this.props.hundelDelete(this.props.id);
            }}
          >
            Delete
          </button>
        </div>
        <input type="text" placeholder="edit name" value={this.state.nameVal} onChange={this.handleChange} />
      </div>
    );
  }
}
