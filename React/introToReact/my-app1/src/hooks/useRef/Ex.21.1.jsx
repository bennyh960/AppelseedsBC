import React, { useEffect, useRef, useState } from "react";

export default function EditingApp() {
  const [state, setState] = useState(true);
  const inputRef = useRef();

  const editSaveFunc = () => {
    setState((prev) => !prev);
    // setState(!state);
    // console.log(state);
    // inputRef.current.focus();
  };

  useEffect(() => {
    if (!state) {
      inputRef.current.focus();
    }
  });

  return (
    <div>
      <button onClick={editSaveFunc}>{state ? "Edit" : "Save"}</button>
      {!state && <input ref={inputRef} />}
    </div>
  );
}
