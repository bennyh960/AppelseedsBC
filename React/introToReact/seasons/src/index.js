import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
//   return <div>Latitude :</div>;
// };

class App extends React.Component {
  // constructor(props) {
  // super(props);
  //THIS IS THE only time we do direct assigment to to this.state
  // this.state = { lat: null, errorMassage: "" };
  // }
  state = { lat: null, errorMassage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMassage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("my componenet was just update- it rerendred");
  }

  render() {
    if (this.state.errorMassage && !this.state.lat) {
      return <div>Error: {this.state.errorMassage}</div>;
      // } else if (!this.state.errorMassage && this.state.lat) return <div>Latitude : {this.state.lat}</div>;
    } else if (!this.state.errorMassage && this.state.lat) return <SeasonDisplay lat={this.state.lat} />;
    return <div>Loading</div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
