import React from "react";
import "./App.css";
import "./Ex3.css";
// import exc1 from "./component/ex1";
// import exc2 from "./component/ex2";
// import Exc3_1 from "./component/EX3.1";
// import Exc3_2 from "./component/EX3.2";
// import Container from "./component/EX.4.1";
import Card from "./component/EX4.2";

// ? Also possible to invoke
// function App() {
//   return (
//     <div>
//       <Exc3_1 />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>hello</h1> */}
        {/* {exc1()} */}
        {/* {exc2()} */}
        {/* {Exc3_1()} */}
        {/* <Exc3_1 /> */}
        {/* <Exc3_2 /> */}
        {/* <ButtonOb role="important" />
        <ButtonOb role="Not important" font="bold" /> */}
        {/* <Container /> */}
        <Card />
      </div>
    );
  }
}
export default App;
