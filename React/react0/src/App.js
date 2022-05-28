import React, { Component } from "react";
import Buttns from "./componenets/buttns/buttns";
import Smilies from "./componenets/smilies/smilies";
import Images from "./componenets/images/images";
import Massage from "./componenets/finalMassage/Massage";
import "./App.css";

export default class App extends Component {
  state = {
    arrOfImages: [],
    currentImg: "",
    isSpinner: true,
    like: 0,
    dislike: 0,
    index: 1,
    currentName: "",
    isFinish: false,
  };

  componentDidMount = async () => {
    const data = await fetch("https://628e3408368687f3e712634b.mockapi.io/shopme");
    const data2 = await data.json();

    this.setState((prev) => {
      return { arrOfImages: data2, currentImg: data2[0].image, isSpinner: false, currentName: data2[0].name };
    });
  };

  likeDisLikeClick = (answere) => {
    if (this.state.index < this.state.arrOfImages.length) {
      this.setState((prev) => {
        return {
          currentImg: prev.arrOfImages[prev.index].image,
          currentName: prev.arrOfImages[prev.index].name,
          index: prev.index + 1,
          [answere]: prev[answere] + 1,
        };
      });
    } else {
      this.setState({ isFinish: true });
    }
  };

  restart = () => {
    this.setState({ isFinish: false, index: 0, like: 0, dislike: 0 });
  };

  render() {
    if (this.state.isSpinner) {
      return <div></div>;
    }
    return (
      <div className="container">
        <Smilies like={this.state.like} dislike={this.state.dislike} />
        {!this.state.isFinish ? (
          <Images image={this.state.currentImg} name={this.state.currentName} />
        ) : (
          <Massage like={this.state.like} dislike={this.state.dislike} restart={this.restart} />
        )}

        <Buttns
          disLikeClick={() => {
            this.likeDisLikeClick("dislike");
          }}
          likeClick={() => {
            this.likeDisLikeClick("like");
          }}
        />
      </div>
    );
  }
}
