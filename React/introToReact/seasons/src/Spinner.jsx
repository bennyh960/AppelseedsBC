import React from "react";

export default function Spinner(props) {
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
