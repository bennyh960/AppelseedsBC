import React from "react";
import axios from "axios";
import SearchBar from "./searchBar";

// simple how to pool data with axios.
class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    // axios.get(arg1,arg2) => arg1 = adress, arg2= customise obj
    axios.get("https://api.unsplash.com/search/photos?query=my", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID lhLi1LNu0ZOEL0YooFvWzCxXN_TSIH-2rN2kUb502yg",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar CalledOnSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
