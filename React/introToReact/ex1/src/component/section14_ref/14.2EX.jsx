import React, { Component } from "react";

export default class CopyBtn extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { alert: "" };
  }

  copyText = () => {
    this.inputRef.current.select();
    navigator.clipboard.writeText(this.inputRef.current.value);
    // navigator.clipboard.readText().then((clipText) => {
    //   console.log("Copied Text:", clipText);
    //   this.setState(() => {
    // return { alert: clipText };
    //   });
    //   alert("Copied Text:", this.state.alert);
    // });
  };

  componentDidUpdate() {
    // alert("Copied Text:", this.inputRef.current.value);
    // console.log(this.state);
  }
  render() {
    return (
      <form>
        <h2>What is the meaining of life?</h2>
        <textarea ref={this.inputRef} />
        <button type="button" onClick={this.copyText}>
          Copy
        </button>
      </form>
    );
  }
}
