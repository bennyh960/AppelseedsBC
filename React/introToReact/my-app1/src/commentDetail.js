import React from "react";
import faker from "faker";

function commentDetail() {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        {/* <img alt="avatar" src=""/> */}
        <img alt="avatar" src={faker.image.image()} />
        {/* <img alt="avatar" src={faker.image.avatar()} /> */}
      </a>
      <div className="content">
        <a href="/" className="author">
          Benny
        </a>

        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">I learn React from scratch</div>
      </div>
    </div>
  );
}

export default commentDetail;
