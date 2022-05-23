import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    console.log("-------------------------------------------------");
    console.log("Im in the constructor");
    //? this is called before the mounting occurs. Before we call render
    super(props);
    this.state = { num: 0, myData: null, isSpinnerOn: true };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ myData: "All data here", isSpinnerOn: false });
    }, 2000);
    // this.interId = setInterval(() => {
    //   console.log('Interval is working');
    //   this.setState((prev) => {
    //     return { num: prev.num + 1 };
    //   });
    // }, 1000);
    //? is executed after the first render. This is where AJAX requests and DOM or state updates should occur.
    console.log("component did mount");
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.myNumber < 6 || nextProps.myNumber > 10) {
      // console.log(this.props.myNumber);
      console.log("shouldComponentUpdate");
      return true; //* return true by default
    }
    return false;
    //? should return true or false value. This will determine if the component will be updated or not. If you are sure the the component don't need to be render after state or props are updated, you can return false.
    //! We need to be very careful with that.
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.myNumber);
    //? Is called just after rendering. Maybe you want to do another asynchronous request depending if the component updated or not
    console.log("Component did update");
  }
  componentWillUnmount() {
    // clearInterval(this.interId);
    console.log("component will unmount");
    //? is called after the component is unmount from the dom or state.
    //? Called immediately before a component is destroyed. Perform any necessary cleanup in the method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount ...
  }
  insertSpinner = () => {
    return !this.state.myData && <h2>Amazing spinner</h2>;
  };
  render() {
    console.log("Im in render");
    return (
      <div>
        {`Num: ${this.props.myNumber}`}
        {/* <h2>Interval Num {this.state.num}</h2> */}
        {this.insertSpinner()}
        {this.state.myData && (
          <div>
            <h2>The data is {this.state.myData}</h2>
          </div>
        )}
      </div>
    );
  }
}
