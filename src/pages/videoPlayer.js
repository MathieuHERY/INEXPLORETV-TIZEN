import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as videoPlayerActions from "../store/actions/videoPlayerActions";
import UseBack from "../helpers/backHandler";
import Loader from "../components/atoms/loader";
import { BACK_KEY } from "../constants/keys";
import { decodeHtmlWithoutDOM } from "../helpers/decodeHtml";
import { ReactComponent as PlayIcon } from "../assets/images/svg/play-rounded.svg";
import { ReactComponent as LogoBoule } from "../assets/images/svg/logo-retina-boule.svg";
import PlayerProgressBar from "../components/molecules/playerProgressBar";

export default function VideoPlayer(props) {
  const backHandler = UseBack();
  const videoPlayerRef = useRef(null);
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

  const onProgress = (data) => {
    setVideoStates((s) => ({
      ...s,
      currentTime: data.playedSeconds,
    }));
  };

  const onDuration = (data) => {
    setVideoStates((s) => ({
      ...s,
      duration: data,
    }));
  };

  return (
    <div className="full-width video-player-container">
      <ReactPlayer
        ref={videoPlayerRef}
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
        onProgress={onProgress}
        onDuration={onDuration}
      />
      {!videoReady ? (
        <div className="video-not-ready">
          <Loader width="130" height="130" color="#ffffff" />
        </div>
      ) : (
        <div className="video-player-controls-overlay">
          <div className="controls-wrapper">
            <div className="icon-wrapper">
              <PlayIcon
                className="icon"
                style={{
                  color: "#38a9e1",
                }}
              />
            </div>
            <div className="progress-controls">
              <h1>{decodeHtmlWithoutDOM(videoPlayer.content.titre)}</h1>
              <PlayerProgressBar
                currentTime={videoStates.currentTime}
                duration={videoStates.duration}
              />
            </div>
            <div className="icon-wrapper">
              <LogoBoule className="icon-boule" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
