import React, { Component } from "react";
import axios from "axios";
import "./style2.css";

export default class Profiles2 extends Component {
  state = { profiles: [], isSpining: true, inputVal: undefined };

  async componentDidMount() {
    try {
      const peopleArr = await axios.get("https://randomuser.me/api/?results=50");
      this.setState({ profiles: peopleArr.data.results, isSpining: false });
      //   console.log(this.state.profiles[0].name.first);
    } catch (error) {
      console.log("Error Benn:", error);
    }
  }
  getInput = (value) => {
    this.setState({ inputVal: value }, () => {
      console.log(this.state.inputVal);
    });
    // console.log(value);
  };

  render() {
    return (
      <div>
        <Input handleInput={this.getInput} />
        {/* <Cards people={this.state.profiles} /> */}

        {(this.state.isSpining && "SPINNER") || (
          <Filter inputSearch={this.state.inputVal} people={this.state.profiles} />
        )}
      </div>
    );
  }
}

function Input(props) {
  return (
    <input
      type={"text"}
      placeholder="Filter people"
      onChange={(e) => {
        props.handleInput(e.target.value);
      }}
    />
  );
}

function Cards(props) {
  return (
    <div className="container-cards">
      {props.people.map((avatar, idx) => {
        return (
          <div key={idx} className="card">
            <div>{` ${avatar.name.first}  ${avatar.name.last}`}</div>
            <img src={avatar.picture.large} alt="blabla" />
          </div>
        );
      })}
    </div>
  );
}

function Filter(props) {
  return (
    <div className="container-cards">
      {props.people.map((avatar, idx) => {
        // console.log("fasdfsd".includes(""));
        if ((avatar.name.first + avatar.name.last).toLowerCase().includes(props.inputSearch)) {
          return (
            <div key={idx} className="card">
              <div>{` ${avatar.name.first}  ${avatar.name.last}`}</div>
              <img src={avatar.picture.large} alt="blabla" />
            </div>
          );
        }
      })}
    </div>
  );
}
