import React, { useRef } from "react";
import video from "./video/vid.mp4";

export default function VideoPlayer() {
  const videoRef = useRef();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2>Play Pause Video Exercise</h2>

      <video ref={videoRef} width={500} height={400}>
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <button
          onClick={(e) => {
            videoRef.current.play();
          }}
        >
          Play
        </button>
        <button
          onClick={(e) => {
            videoRef.current.pause();
          }}
        >
          Pause
        </button>
      </div>
    </div>
  );
}
