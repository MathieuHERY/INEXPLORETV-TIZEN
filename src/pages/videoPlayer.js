import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as videoPlayerActions from "../store/actions/videoPlayerActions";
import UseBack from "../helpers/backHandler";
import { BACK_KEY } from "../constants/keys";

export default function VideoPlayer(props) {
  const backHandler = UseBack();
  const videoResolution = "720p";
  const videoPlayer = useSelector((state) => state.videoPlayerReducer);
  const [videoStates, setVideoStates] = useState({
    play: true,
    currentTime: 0,
    duration: 0,
    videoUrl: null,
    vid: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  useEffect(() => {
    function goBack() {
      BACK_KEY.map((key, i) => {
        if (backHandler === key) {
          navigate(-1);
        }
      });
    }
    goBack();
  }, [backHandler]);

 

  return (
    <div className="full-width video-player-container">
      <ReactPlayer
        className="video"
        url={videoStates.videoUrl}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={videoStates.play}
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
        onReady={() => console.log("ready")}
      />
    </div>
  );
}
