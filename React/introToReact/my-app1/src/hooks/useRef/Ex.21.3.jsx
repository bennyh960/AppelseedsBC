import React, { useRef, useState } from "react";
import p1 from "./images/pic1.jpg";
import p1bw from "./images/pic1BW.jpg";
import p2 from "./images/pic2.jpg";
import p2bw from "./images/pic2BW.jpg";

export default function ImageToggle() {
  const [state, setState] = useState([p1, p2]);

  const imgRef = useRef();
  const imgRef2 = useRef();

  const handleOver = (event) => {
    if (event.target.id === "img1") {
      setState((p) => [p1bw, p2]);
      imgRef.current.src = state[0];
    } else {
      setState((p) => [p1, p2bw]);
      imgRef2.current.src = state[1];
    }
  };
  const handleOut = () => {
    setState((p) => [p1, p2]);
    imgRef.current.src = state[0];
    imgRef2.current.src = state[1];
  };

  return (
    <div>
      <Image srcp={state[0]} idp={"img1"} refp={imgRef} handleOver={handleOver} handleOut={handleOut} />
      <Image srcp={state[1]} idp={"img2"} refp={imgRef2} handleOver={handleOver} handleOut={handleOut} />
    </div>
  );
}

function Image({ srcp, idp, refp, handleOver, handleOut }) {
  return (
    <img src={srcp} width={300} height={200} id={idp} ref={refp} onMouseOver={handleOver} onMouseOut={handleOut} />
  );
}
