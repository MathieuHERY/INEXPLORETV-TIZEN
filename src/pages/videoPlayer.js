import React, { useEffect, useState, useRef } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseKeys from "../helpers/keysHelpers";
import Loader from "../components/atoms/loader";
import PlayerControls from "../components/organisms/playersControls";
import { KEYS } from "../constants/keys";

export default function VideoPlayer(props) {
  const { ref, focusKey, focusSelf } = useFocusable({
    onArrowPress: (direction) => onArrowPress(direction),
    onEnterPress: () => handlePlay(),
  });
  const keyHandler = UseKeys();
  const videoPlayerRef = useRef();
  const videoPlayer = useSelector((state) => state.videoPlayerReducer);
  const [videoReady, setVideoReady] = useState(false);
  const [direction, setDirection] = useState("play");
  const [videoStates, setVideoStates] = useState({
    play: true,
    currentTime: 0,
    duration: 0,
    videoUrl: videoPlayer.content.file.link,
    vid: videoPlayer.content.vid,
    showControls: true,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    function init() {
      focusSelf();
 
      KEYS.back.map((key, i) => {
        if (keyHandler === key) {
          navigate(-1);
        }
      });
      KEYS.playPause.map((key, i) => {
        if (keyHandler === key) {
          handlePlay();
        }
      });
      KEYS.play.map((key, i) => {
        if (keyHandler === key) {
          playPause("play");
        }
      });
      KEYS.pause.map((key, i) => {
        if (keyHandler === key) {
          playPause("pause");
        }
      });
    }
    init();
  }, [focusSelf, keyHandler, direction]);

  const onArrowPress = (direction) => {
    switch (direction) {
      case "left":
        return skipBackward();
      case "right":
        return skipForward();
    }
  };

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

  const skipForward = () => {
    setDirection("right");
    videoPlayerRef.current.seekTo(videoStates.currentTime + 30);
    setVideoStates({
      ...videoStates,
      currentTime: videoStates.currentTime + 30,
      showControls: true,
    });
  };

  const skipBackward = () => {
    setDirection("left");
    videoPlayerRef.current.seekTo(videoStates.currentTime - 30);
    setVideoStates({
      ...videoStates,
      currentTime: videoStates.currentTime - 30,
      showControls: true,
    });
  };

  const handlePlay = () => {
    if (videoStates.play) {
      setVideoStates({
        ...videoStates,
        play: false,
      });
    } else {
      setVideoStates({
        ...videoStates,
        play: true,
      });
    }
  };

  const onPlay = () => {
    setDirection("play");
    setTimeout(
      () => setVideoStates((s) => ({ ...s, showControls: false })),
      2000
    );
  };

  const onSeek = () => {
    if (videoStates.play) {
      setDirection("play");
      setTimeout(
        () => setVideoStates((s) => ({ ...s, showControls: false })),
        2000
      );
    } else {
      setDirection("pause");
    }
  };

  const onEnd = () => {
    navigate(-1);
  };

  const playPause = (params) => {
    if (params === "play") {
      setVideoStates({
        ...videoStates,
        play: true,
      });
    } else {
      setVideoStates({
        ...videoStates,
        play: false,
      });
    }
  };

  const onPause = () => {
    setDirection("pause");
    setVideoStates((s) => ({ ...s, showControls: true }));
  };

  const showControls = () => {
    if (!videoStates.showControls) {
      setVideoStates((s) => ({ ...s, showControls: true }));
      setTimeout(
        () => setVideoStates((s) => ({ ...s, showControls: false })),
        2000
      );
    }
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="full-width video-player-container">
        <ReactPlayer
          ref={videoPlayerRef}
          className="video"
          url={videoStates.videoUrl}
          width="100%"
          height="100%"
          controls={false}
          loop={false}
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
          onPlay={onPlay}
          onSeek={onSeek}
          onEnded={onEnd}
          onPause={onPause}
        />
        {!videoReady ? (
          <div className="video-not-ready">
            <Loader width="130" height="130" color="#ffffff" />
          </div>
        ) : (
          <PlayerControls
            currentTime={videoStates.currentTime}
            duration={videoStates.duration}
            titre={videoPlayer.content.titre}
            visible={videoStates.showControls}
            direction={direction}
            skipForward={skipForward}
            skipBackward={skipBackward}
            showControls={showControls}
            play={videoStates.play}
          />
        )}
      </div>
    </FocusContext.Provider>
  );
}
