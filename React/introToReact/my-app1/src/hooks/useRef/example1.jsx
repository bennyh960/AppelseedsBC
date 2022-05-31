import React, { useEffect, useRef, useState } from "react";

// *Example 3
export default function Example() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </div>
  );
}
// *Example 2
// export default function Example() {
//   const [name, setName] = useState("");
//   const inputRef = useRef();

//   function focus() {
//     inputRef.current.focus();
// ? not recomanded
// inputRef.current.value = "some value";
// setName(inputRef.current.value);
//   }
//   return (
//     <div>
//       <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <button onClick={focus}>Focus</button>
//     </div>
//   );
// }
// * Example 1
// export default function Example() {
//   const [name, setName] = useState("");
//   const renderTimes = useRef(1);

//   useEffect(() => {
//     ++renderTimes.current;
//   });

//   return (
//     <div>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <div>I rendered {renderTimes.current}</div>
//     </div>
//   );
// }
