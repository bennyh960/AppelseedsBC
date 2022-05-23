import React, { Component } from "react";

export default class Focus extends Component {
  constructor(props) {
    super(props);
    // this.inputRef =
  }
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.placeholder = "blablabla";
  }

  componentDidMount = () => {
    console.dir(this.inputRef.current);
    this.inputRef.current.focus();
  };
  render() {
    return (
      <form>
        <label htmlFor="myInput">This field is on focus on load and on lable click</label>
        <input ref={this.inputRef} type="text" id="myInput" />
        <input type="text" id="myInput" placeholder={this.placeholder} />
      </form>
    );
  }
}
