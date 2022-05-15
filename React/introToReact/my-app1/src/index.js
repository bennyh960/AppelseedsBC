// Import react and react dom libaries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentDetail";
// import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      {/* i must call the function with CampitalCase */}
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
