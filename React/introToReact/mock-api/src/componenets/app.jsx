import React, { Component } from "react";
import "./style.css";
import API from "./api/api";
import Person from "./person/person";

export default class AppMoc extends Component {
  state = { isSpinner: true, personArr: [], newName: "", newLastName: "", newImage: "" };

  componentDidMount = async () => {
    const { data } = await API.get();
    this.setState((prev) => {
      return { personArr: data, isSpinner: false };
    });
  };

  // ! POST in orther to create new obj in api
  addPeople = async () => {
    this.setState({ isSpinner: true });
    const newPeople = {
      name: this.state.newName,
      last: this.state.newLastName,
      avatar: this.state.newImage,
    };
    try {
      const postData = await API.post("/", newPeople);
      this.setState((prev) => {
        return {
          personArr: [...prev.personArr, postData.data],
          newName: "",
          newLastName: "",
          newImage: "",
          isSpinner: false,
        };
      });
    } catch (error) {
      console.log("Error Benny:", error);
    }
  };

  // ! Delete

  hundelDelete = async (peopleID) => {
    // console.log(peopleID);
    this.setState({ isSpinner: true });
    try {
      await API.delete("/" + peopleID);

      const updatedPersonArr = this.state.personArr.filter((people) => {
        return people.id !== peopleID;
      });

      this.setState((prev) => {
        return { personArr: updatedPersonArr, isSpinner: false };
      });
    } catch (error) {
      console.log("Error Delete Benn", error);
    }
  };

  // ! PUT -edit
  handelEdit = async (peopleID, newName) => {
    this.setState({ isSpinner: true });
    const personToUpdate = this.state.personArr.find((p) => p.id === peopleID);
    const updatedPerson = { ...personToUpdate, name: newName };
    console.log(updatedPerson);
    try {
      const { data } = await API.put("/" + peopleID, updatedPerson);
      this.setState((prev) => {
        return {
          personArr: prev.personArr.map((p) => {
            if (p.id === peopleID) {
              return data;
            } else {
              return p;
            }
            // return data ? p.id === peopleID : p;
          }),
          isSpinner: false,
        };
      });
    } catch (error) {
      console.log("Edit error", error);
    }
  };

  // ? just utility function to update states
  hundleInputChange = ({ target }) => {
    this.setState((prev) => {
      return { [target.id]: target.value };
    });
  };

  // ? UI
  drawPeople = () => {
    return this.state.personArr.map((people) => {
      return (
        <Person
          key={people.id}
          id={people.id}
          name={people.name}
          last={people.last}
          img={people.avatar}
          hundelDelete={this.hundelDelete}
          handleEditClick={this.handelEdit}
        />
      );
    });
  };

  render() {
    if (this.state.isSpinner) {
      return <h1>Spinner</h1>;
    }
    return (
      <div className="container-all">
        <div className="user-input-container">
          <p>Create People:</p>
          <input type="text" placeholder="add first name" id="newName" onChange={this.hundleInputChange} />
          <input type="text" placeholder="add last name" id="newLastName" onChange={this.hundleInputChange} />
          <input type="text" placeholder="add img" id="newImage" onChange={this.hundleInputChange} />
          <button onClick={this.addPeople}>Add People</button>
        </div>

        <div className="container">{this.drawPeople()}</div>
      </div>
    );
  }
}
