import React from "react";
// import axios from "axios";
import SearchBar from "./searchBar";
import unsplash from "../api/unsplash";

// here we will see how to use 2 methode , then and async
//then statment after axios parantesis due to axiox return promise
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    // console.log(term);
    // axios.get(arg1,arg2) => arg1 = adress, arg2= customise obj
    // const response = await axios.get("/search/photos", {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar CalledOnSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
