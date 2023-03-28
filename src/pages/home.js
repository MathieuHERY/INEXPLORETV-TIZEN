import React from "react";
import ReactPlayer from "react-player";

export default function HomePage(props) {
  return (
    <div className="full-width home-video-container">
      <ReactPlayer
        className="video"
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="100%"
        height="100%"
        controls={false}
        playing
        muted
        config={{
          file: {
            attributes: {
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            },
          },
        }}
      />
      <div className="content">
        <h1>totot</h1>
      </div>
    </div>
  );
}
