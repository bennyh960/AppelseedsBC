import "./styleDraft.css";
import React from "react";

export default class Draft extends React.Component {
  constructor(props) {
    super(props);
    this.randA = Math.ceil(Math.random() * 6);
    this.randB = Math.ceil(Math.random() * 6);
    this.turn = 1;
    // this.state = { diceA: "dice1", diceB: "dice3", scorePlayer1: 0, scorePlayer2: 230 };
    this.state = { diceA: `dice${this.randA}`, diceB: `dice${this.randB}`, whosTurnNow: 1 };
  }
  componentDidMount = () => {
    this.setState({ diceA: `dice${this.randA}`, diceB: `dice${this.randB}` });
  };
  componentDidUpdate = () => {
    this.randA = Math.ceil(Math.random() * 6);
    this.randB = Math.ceil(Math.random() * 6);
    console.log("from father component");
  };

  changeTurnByClickOnHold = () => {
    console.log("u pressed on hold the turn should change");
    // if (this.turn === 1) {
    //   this.turn = 2;
    //   return "turn-symbol";
    // }
  };

  changeTurn = () => {
    return "turn-symbol";
  };
  render() {
    return (
      <div className="container">
        <Controller callOnRollDiceClick={this.componentDidMount} diceA={this.state.diceA} diceB={this.state.diceB} />
        <Players playerNum="p1" pIdx={1} turnNow={"turn-symbol"} scoreP={this.state.scorePlayer1} />
        <Players playerNum="p2" pIdx={2} scoreP={this.state.scorePlayer2} />
      </div>
    );
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.turn = 1;
  }
  onRollDiceClick = () => {
    this.props.callOnRollDiceClick();
    // console.log("from controller componnent as child");
  };
  onHoldClick = () => {
    // this.props.callOnHoldClick();
    if (this.turn === 1) this.turn = 2;
    else this.turn = 1;
    this.props.turnNow = 1; //this.turn;
    console.log("turn now of player num", this.turn);
    // console.log("from controller componnent as child");
  };
  render() {
    return (
      <div className="controller">
        <button>New Game</button>
        <div className={`img1 ${this.props.diceA}`}></div>
        <div className={`img2 ${this.props.diceB}`}></div>
        <button onClick={this.onRollDiceClick}>Role Dice</button>
        <button onClick={this.onHoldClick}>Hold</button>
        <input></input>
      </div>
    );
  }
}

const Players = (props) => {
  return (
    <div className={`player ${props.playerNum}`}>
      <div className="playerTurnContainer">
        <h1>Player {props.pIdx}</h1>
        <div className={props.turnClass}></div>
      </div>
      <div className="score1">{props.scoreP}</div>
      <div className="current">32</div>
    </div>
  );
};
