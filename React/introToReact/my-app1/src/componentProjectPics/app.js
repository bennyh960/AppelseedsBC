import React from "react";
// import axios from "axios";
import SearchBar from "./searchBar";
import unsplash from "../api/unsplash";
import ImageList from "./image";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar CalledOnSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
