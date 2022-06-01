import React, { useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "./themContext";

export default function Child({ light, dark, margin, padding, width, height, display }) {
  const darkTheme = useContext(ThemeContext);
  const toogleTheme = useContext(ThemeUpdateContext);
  const themStyle = {
    backgroundColor: darkTheme ? dark || "#333" : light || "#CCC",
    color: darkTheme ? light || "#CCC" : dark || "#333",
    padding: padding || "1rem",
    margin: margin || "1rem auto",
    width: width || "fit-content",
    height: height || "fir-content",
    display: display || "block",
  };

  return (
    <>
      <div style={themStyle}>Theme</div>
      <button onClick={toogleTheme}>toggle Theme</button>
    </>
  );
}
