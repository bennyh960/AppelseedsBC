import React from "react";
// import faker from "faker";

const props = {
  author: "Sam",
  timeAgo: "Yesterday at 02:00PM",
};

function commentDetail(props) {
  // console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        {/* <img alt="avatar" src=""/> */}
        <img alt="avatar" src={props.avatar} />
        {/* <img alt="avatar" src={faker.image.image()} /> */}
        {/* <img alt="avatar" src={faker.image.avatar()} /> */}
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author} {props.lastName}
          {/* Sam */}
        </a>

        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
}

export default commentDetail;
