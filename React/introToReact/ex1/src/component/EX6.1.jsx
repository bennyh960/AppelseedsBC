import React from "react";

function generateRandomWords(lengthL, lengthW) {
  const textL = "abcdefghijklmnopqurstuv";
  const textU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rand = Math.floor(Math.random() * 26);
  let randText = textU[rand];

  for (let i = 0; i < Math.min(lengthL, Math.floor(rand / 3)); i++) {
    randText += textL[Math.floor(Math.random() * 26)];
    for (let i = 0; i < Math.min(lengthW + 1, Math.floor(rand / 2)); i++) {
      randText += textL[Math.floor(Math.random() * 26)];
    }
    randText += " ";
  }
  return randText;
}

class ButtonOb extends React.Component {
  render() {
    return (
      <div>
        <button style={{ color: "orange" }} type="button">
          {this.props.role}
        </button>
      </div>
    );
  }
}

class Img extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.url}></img>
      </div>
    );
  }
}
class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div
        className="Container"
        style={{
          display: "flex",
          marginLeft: 20,
          width: 700,
          height: 600,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img url="https://picsum.photos/700/300" />
        <Title title={generateRandomWords(2, 4)} description={generateRandomWords(4, 40)} />
        <div className="buttons" style={{ display: "flex", width: 200, justifyContent: "space-evenly" }}>
          <ButtonOb role="SHARE" />
          <ButtonOb role="EXPLORE" />
        </div>
      </div>
    );
  }
}

export default Card;
