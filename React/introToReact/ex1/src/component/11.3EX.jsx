import React from "react";

export default class Survey extends React.Component {
  state = { showUserData: false, firstName: "", lastName: "", textarea: "", ageSelected: "" };
  onInputChange = (data, id) => {
    if (id === "firstname") {
      this.setState({ firstName: data });
    } else if (id === "Lasttname") {
      this.setState({ lastName: data });
    } else if (id === "textArea") {
      this.setState({ textarea: data });
    } else if (id === "age") {
      this.setState({ ageSelected: data });
    }
  };

  onClearDataClick = () => {
    for (let key in this.state) {
      this.setState({ [key]: "" });
    }
  };
  render() {
    return (
      <div>
        <form>
          <Input
            type="text"
            ID="firstname"
            labelText="First Name: "
            InputFromUser={this.onInputChange}
            value={this.state.firstName}
          />
          <Input
            type="text"
            ID="Lasttname"
            labelText="Last Name: "
            InputFromUser={this.onInputChange}
            value={this.state.lastName}
          />
          <TextArea
            ID="textArea"
            labelText="Free Text:"
            InputFromUser={this.onInputChange}
            value={this.state.textarea}
          />
          <SelectAge ID="age" labelText="Age: " InputFromUser={this.onInputChange} value={this.state.ageSelected} />
          <button
            onClick={(e) => {
              e.preventDefault();
              this.setState({ showUserData: true });
              //   console.log(this.state);
            }}
          >
            Continue
          </button>
          {this.state.showUserData && (
            <div>
              <h3>Your Data:</h3>
              <div>Full Name: {this.state.firstName + " " + this.state.lastName} </div>
              <div>Age Cayegory: {this.state.ageSelected} </div>
              <div>Your Text: {this.state.textarea} </div>
              <button onClick={this.onClearDataClick}>Back</button>
              <button type="submit">Send Survey</button>
            </div>
          )}
        </form>
      </div>
      //   </div>
    );
  }
}

class Input extends React.Component {
  state = { term: "", id: "" };

  render() {
    return (
      <>
        <label htmlFor={this.props.ID}>{this.props.labelText}</label>
        <input
          id={this.props.ID}
          type={this.props.type}
          value={this.props.value}
          onChange={(e) => {
            this.setState({ term: e.target.value, id: this.props.ID });
            this.props.InputFromUser(e.target.value, this.props.ID);
          }}
        ></input>
        <br />
        <br />
      </>
    );
  }
}
class TextArea extends React.Component {
  state = { term: "" };
  render() {
    return (
      <>
        <label htmlFor={this.props.ID}>{this.props.labelText}</label>
        <textarea
          id={this.props.ID}
          value={this.props.value}
          onChange={(e) => {
            this.setState({ term: e.target.value, id: this.props.ID });
            this.props.InputFromUser(e.target.value, this.props.ID);
          }}
        ></textarea>
        <br />
      </>
    );
  }
}
class SelectAge extends React.Component {
  //   state = { optionSelected: "" };
  //   onOptionSeleted = (e) => {
  //     this.setState({ optionSelected: e.value });
  //   };
  render() {
    return (
      <>
        <label htmlFor={this.props.ID}>{this.props.labelText}</label>
        <select
          name={this.props.ID}
          id={this.props.ID}
          value={this.props.value}
          onChange={(e) => {
            this.props.InputFromUser(e.target.value, this.props.ID);
          }}
        >
          <option value="0-15">0-15</option>
          <option value="15-30">15-30</option>
          <option value="30-45">30-45</option>
          <option value="adults">above 45</option>
        </select>
        <br />
      </>
    );
  }
}
