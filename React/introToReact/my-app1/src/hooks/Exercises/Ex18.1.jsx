import React, { useState } from "react";

export default function ReadMoreLess({ text, maxLength }) {
  const [curLength, setCurLength] = useState(maxLength);
  const [readStatus, setReadStatus] = useState("Read More");
  const HandleClick = () => {
    if (readStatus === "Read More") {
      setCurLength(text.length);
      setReadStatus("Read Less");
      return;
    } else {
      setCurLength(maxLength);
      setReadStatus("Read More");
      return;
    }
  };
  return (
    <div>
      <h1>Text :</h1>
      <div>
        {text.slice(0, curLength)}
        {readStatus === "Read More" ? "..." : ""}
        <button
          onClick={HandleClick}
          style={{ border: "none", color: "blue", backgroundColor: "transparent", cursor: "pointer" }}
        >
          {readStatus}
        </button>
      </div>
    </div>
  );
}

// text as a string
// maxLength as a num
