import React, { useState } from "react";
import Child from "./child";

export const ThemeContext = React.createContext();

export default function Parent() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle</button>
        <Child />
      </ThemeContext.Provider>
    </div>
  );
}
