import React from "react";
import SearchBar from "./searchBar";
import youtube from "./api/youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("pokemon");
  }

  onTermSubmit = async (term) => {
    // console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response);
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    // console.log("From the APP", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit2={this.onTermSubmit} />
        <div className="ui grid ">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
