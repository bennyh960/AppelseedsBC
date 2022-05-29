import React, { useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    // console.log("title.clicked", index);
    setActiveIndex(index);
  };
  const renderingItems = items.map((item, idx) => {
    const active = idx === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClicked(idx);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderingItems}
      {/* <h1>{activeIndex}</h1> */}
    </div>
  );
}
