import "./style9.1.css";
import React from "react";

// link to add to index.html : <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />

export default class Timer extends React.Component {
  state = { time: 0 };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  render() {
    if (this.state.time === 0) {
      if (Math.random() < 0.5) return <Spinner />;
      else return <Spinner2 />;
    } else {
      return <div>Load for {this.state.time} seaconds</div>;
    }
  }
}

function Spinner(props) {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.text}</div>
    </div>
  );
}

//in case we forgot put text
Spinner.defaultProps = {
  text: "Loading...",
};
function Spinner2(props) {
  return <div className="loader"></div>;
}
