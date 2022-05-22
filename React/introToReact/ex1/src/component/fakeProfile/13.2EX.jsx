import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class FakeProfile extends Component {
  state = { profiles: [], isSpining: true, profilesArchive: [] };

  getAvatars = async () => {
    const allProfiles = [];

    for (let i = 0; i < 10; i++) {
      const profile = await axios.get("https://randomuser.me/api/");
      const dataObj = {
        first: profile.data.results[0].name.first,
        last: profile.data.results[0].name.last,
        pic: profile.data.results[0].picture.large,
        email: profile.data.results[0].email,
      };
      allProfiles.push(dataObj);
    }
    this.setState({ profiles: [...allProfiles], isSpining: false, profilesArchive: [...allProfiles] });
  };

  filterdProfiles = (profile) => {
    const filtred = this.state.profiles.filter((avatar) => {
      return avatar.first.includes(profile) || avatar.last.includes(profile);
    });
    if (profile) {
      this.setState({ profiles: filtred });
    } else {
      this.setState({ profiles: this.state.profilesArchive });
    }
  };

  componentDidMount() {
    this.getAvatars();
  }

  render() {
    // console.log(this.state.profiles[0]);
    // console.log(this.state.profiles[0]);
    return (
      <div className="conatiner-profiles">
        <FilterProfile handleInput={this.filterdProfiles} />
        <Cards profiles={this.state.profiles} spin={this.state.isSpining} />
      </div>
    );
  }
}

function Cards(props) {
  const avatarsNames = props.profiles.map((avatar) => {
    return (
      <div className="card" key={avatar.first}>
        {avatar.first + " " + avatar.last}
        <img src={avatar.pic} alt={avatar.name} />
      </div>
    );
  });

  if (props.spin) {
    return <div>SPINNER</div>;
  }

  return <div className="conatiner-profiles">{avatarsNames}</div>;
}

function FilterProfile(props) {
  return (
    <>
      <label>Filter profile:</label>
      <input
        onChange={(e) => {
          props.handleInput(e.target.value);
        }}
      />
    </>
  );
}
