import React from "react";

export default class CheckBoxFather extends React.Component {
  state = { checked: true };
  render() {
    return (
      <form>
        <CheckBox text="I read the term of the app " checked={false} />
        <CheckBox text="I accept the term of the app " checked={false} />
        <CheckBox text="I want to get the weekly news letter " checked={true} />
        <CheckBox text="I want to get sales and offers " checked={true} />
      </form>
    );
  }
}

// isDefault={defaultChecked}

class CheckBox extends React.Component {
  render() {
    return (
      <>
        <input id="c1" type="CheckBox" defaultChecked={this.props.checked} />
        <label htmlFor="c1">{this.props.text}</label>
        <br />
      </>
    );
  }
}
