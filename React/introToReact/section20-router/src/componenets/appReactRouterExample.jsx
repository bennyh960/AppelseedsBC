import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      {/*bad approach <a href="/pagetwo">PageTwo</a> */}
      <br />
      <Link to={"/pagetwo"}>Navigate to page 2</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      <Link to={"/"}>Navigate to page 1</Link>
      <br />
      PageTwo
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </BrowserRouter>
      </div>
    );
  }
}
