import React, { Component } from "react";
import axios from "axios";
import "./style2.css";

// const persons = await axios.get("https://randomuser.me/api/?results=50");

export default class Profiles3 extends Component {
  state = { avatarsArray: [], userInput: "" };
  componentDidMount = async () => {
    try {
      const profiles = await axios.get("https://randomuser.me/api/?results=50");
      const relevantData = profiles.data.results.map((avatarObj) => {
        return {
          id: avatarObj.cell,
          first: avatarObj.name.first,
          last: avatarObj.name.last,
          image: avatarObj.picture.large,
        };
      });
      console.log(relevantData);
      this.setState({ avatarsArray: relevantData });
    } catch (error) {
      console.log("BENBEN ERR:", error.message);
    }
  };
  insertAvatars = () => {
    return this.state.avatarsArray.map((avatar) => {
      return <Avatar key={avatar.id} firstName={avatar.first} lastName={avatar.last} imgUrl={avatar.image} />;
    });
  };

  getInputValue = (value) => {
    this.setState({ userInput: value });
  };
  render() {
    return (
      <div>
        <Input handleChange={this.getInputValue} />
        <div className="container-cards">{this.insertAvatars()}</div>
      </div>
    );
  }
}

// =====================================================
function Avatar({ firstName, lastName, imgUrl }) {
  return (
    <div className="card">
      <h3>
        {firstName} {lastName}
      </h3>
      <img src={imgUrl} alt="" />
    </div>
  );
}

function Input(props) {
  return <input onChange={(e) => props.handleChange(e.target.value)} />;
}
