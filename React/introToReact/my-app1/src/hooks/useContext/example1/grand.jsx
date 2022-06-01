import React, { useContext } from "react";
import { myContext } from "./parent";

export default function Grand() {
  const { age, setAge } = useContext(myContext);
  return (
    <div>
      <button onClick={() => setAge((prev) => prev + 1)}>Change Age</button>
      Grand : {age}
    </div>
  );
}
