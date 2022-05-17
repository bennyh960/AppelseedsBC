// Import react and react dom libaries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
import "./styleBtn.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Wrning!</h4>
          Are your sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 6:00PM" content="Nice Blog post" avatar={faker.image.image()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Daniel"
          timeAgo="Yesterday at 11:30AM"
          content="Cool lorem"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Shira"
          timeAgo="Last Friday at 08:00PM"
          content="Nice post"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Ohad" timeAgo="Today at 08:00PM" content="Like" avatar={faker.image.image()} />
      </ApprovalCard>
      {/* <CommentDetail
        lastName="Choen"
        author="Ohad"
        timeAgo="Today at 08:00PM"
        content="Like"
        avatar={faker.image.image()}
      />
      <CommentDetail
        lastName="Hassan"
        author="Benny"
        timeAgo="Today at 08:00PM"
        content="Like"
        avatar={faker.image.image()}
      /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
