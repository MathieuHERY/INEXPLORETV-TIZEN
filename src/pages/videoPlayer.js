import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as videoPlayerActions from "../store/actions/videoPlayerActions";
import UseBack from "../helpers/backHandler";
import Loader from "../components/atoms/loader";
import { BACK_KEY } from "../constants/keys";

export default function VideoPlayer(props) {
  const backHandler = UseBack();
  const videoPlayer = useSelector((state) => state.videoPlayerReducer);
  const [videoReady, setVideoReady] = useState(false);
  const [videoStates, setVideoStates] = useState({
    play: true,
    currentTime: 0,
    duration: 0,
    videoUrl: videoPlayer.content.file.link,
    vid: videoPlayer.content.vid,
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
        onReady={() => setVideoReady(true)}
      />
      {!videoReady && (
        <div className="video-not-ready">
          <Loader width="130" height="130" color="#ffffff" />
        </div>
      )}
    </div>
  );
}
