import React from "react";
import "./App.css";
// import exc1 from "./component/ex1";
import exc2 from "./component/ex2";

// function App() {
//   return <div>{exc1()}</div>;
// }

class App extends React.Component {
  render() {
    return (
      <div>
        {/* {exc1()} */}
        {exc2()}
        {/* {exc1()} */}
      </div>
    );
  }
}
export default App;
