import React, { useContext, useState } from "react";

export const ThemContext = React.createContext();

export function useTheme() {
  return useContext(ThemContext);
}

export default function ThemProvider({ children }) {
  const [darkThem, setThem] = useState(false);
  function toggleThem() {
    setThem((prev) => {
      return !prev;
    });
  }
  return <ThemContext.Provider value={{ darkThem, toggleThem }}>{children}</ThemContext.Provider>;
}
