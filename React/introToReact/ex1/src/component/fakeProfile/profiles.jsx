import React, { Component } from "react";
import axios from "axios";
import "./style2.css";

export default class Profiles extends Component {
  state = { profiles: [], isSpining: true };

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

  render() {
    const dataShow = "Spinner" ? this.state.isSpining : this.state.profiles[0].name.first;
    return (
      <div className="container-all">
        <Input />
        <div>{this.state.isSpining && "SPINNER"}</div>

        <Cards name={this.state.profiles.name} />
      </div>
    );
  }
}

function Input(props) {
  return <input placeholder="Filter" />;
}

function Cards(props) {
  if (props.name) {
    return <div>name:{props.name.first}</div>;
  }
}
