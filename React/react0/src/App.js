import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { defaults } from "figlet";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ? we going to write our first componenent
// ? Componennet that return jsx . jsx converted to html

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Header />;
  }
}

const text = "Hello benny";
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      text2: "this is from class header",
      text3: "this is text 3",
    };
  }
  render() {
    // return <h1>Hello world from App componenent its not so understanedbale now</h1>;
    // return <h1>{text}</h1>;
    return (
      <div>
        <h1>{this.state.text2}</h1>;<h3>{this.state.text3}</h3>;
      </div>
    );
  }
}

export default App;
