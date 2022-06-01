import React, { createContext, useState } from "react";
import Grand from "./grand";
import Son from "./son";

export const myContext = createContext();

export default function Parent() {
  const [age, setAge] = useState(10);
  return (
    <div>
      <myContext.Provider value={{ age, setAge }}>
        <h1> Parent</h1>
        <h2>
          <Son />
        </h2>
        <h3>
          <Grand />
        </h3>
      </myContext.Provider>
    </div>
  );
}
