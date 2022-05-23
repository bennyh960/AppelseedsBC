import React from "react";
import VideoItem from "./videoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos
  const renderList = videos.map((video) => {
    // console.log(video);
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
