import React from "react";
import { useTheme } from "./themProvider";

export default function Child() {
  const { darkThem, toggleThem } = useTheme();
  const style = {
    backgroundColor: darkThem ? "#333" : "#CCC",
    color: darkThem ? "#CCC" : "#333",
    margin: "1rem",
    padding: "1rem",
    textAlign: "center",
    borderRadius: "5px",
  };
  const style2 = {
    backgroundColor: !darkThem ? "#333" : "#CCC",
    color: !darkThem ? "#CCC" : "#333",
    margin: "0.5rem",
    padding: "0.5rem",
    borderRadius: "5px",
  };
  return (
    <>
      <div style={style}>Text or anything in this componenet</div>
      <button style={style2} onClick={toggleThem}>
        toggle
      </button>
    </>
  );
}
