// Import react and react dom libaries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      {/* i must call the function with CampitalCase */}
      <CommentDetail author="Sam" timeAgo="Today at 6:00PM" content="Nice Blog post" avatar={faker.image.image()} />
      <CommentDetail author="Daniel" timeAgo="Yesterday at 11:30AM" content="Cool lorem" avatar={faker.image.image()} />
      <CommentDetail author="Shira" timeAgo="Last Friday at 08:00PM" content="Nice post" avatar={faker.image.image()} />
      <CommentDetail author="Ohad" timeAgo="Today at 08:00PM" content="Like" avatar={faker.image.image()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
