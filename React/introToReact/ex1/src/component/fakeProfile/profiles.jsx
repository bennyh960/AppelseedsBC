import React, { Component } from "react";
import axios from "axios";
import "./style2.css";

export default class Profiles extends Component {
  state = { profiles: [], isSpining: true, isFiltered: false, inputData: undefined };

  getProfile = async () => {
    try {
      const persons = await axios.get("https://randomuser.me/api/?results=50");
      this.setState({ profiles: [...persons.data.results], isSpining: false });
      console.log(this.state.profiles[0].name.first);
    } catch (error) {
      console.log("Error Benn:", error);
    }
  };

  async componentDidMount() {
    await this.getProfile();
  }

  handleInput = (filtred) => {
    if (filtred) {
      this.setState({ inputData: filtred, isFiltered: true });
    } else {
      this.setState({ isFiltered: false });
    }
  };

  render() {
    return (
      <div className="container-all">
        <Input inputFilter={this.handleInput} />
        {(this.state.isSpining && <div>SPINNER</div>) || (
          <Cards isFiltred={this.state.isFiltered} names={this.state.profiles} filtredNames={this.state.inputData} />
        )}
      </div>
    );
  }
}

function Input(props) {
  return (
    <input
      onChange={(e) => {
        props.inputFilter(e.target.value);
        // console.log(e.target.value);
      }}
      placeholder="Filter"
    />
  );
}

function Cards(props) {
  if (props.names.length > 0) {
    let arrOfPeople = props.names;
    console.log(props.filtredNames, props.isFiltred);
    if (props.isFiltred) {
      console.log(props.filtredNames);
      arrOfPeople = arrOfPeople.filter((avatar) =>
        (avatar.name.first + avatar.name.last).toLowerCase().includes(props.filtredNames.toLowerCase())
      );
    }
    return (
      <div className="container-cards">
        {arrOfPeople.map((avatar, i) => {
          return (
            <div key={i} className="card">
              <div>{`${avatar.name.title}  ${avatar.name.first}  ${avatar.name.last}`}</div>
              <img src={avatar.picture.large} alt={avatar.name.first} />
            </div>
          );
        })}
      </div>
    );
  }
}
