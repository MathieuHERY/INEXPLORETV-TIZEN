import React, { useRef, useEffect, useCallback } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import PlayerProgressBar from "../molecules/playerProgressBar";
import { decodeHtmlWithoutDOM } from "../../helpers/decodeHtml";
import { ReactComponent as PlayIcon } from "../../assets/images/svg/play-rounded.svg";
import { ReactComponent as SkipForward } from "../../assets/images/svg/forward.svg";
import { ReactComponent as SkipBackward } from "../../assets/images/svg/backward.svg";
import { ReactComponent as PauseIcon } from "../../assets/images/svg/pause.svg";
import { ReactComponent as LogoBoule } from "../../assets/images/svg/logo-retina-boule.svg";

export default function PlayerControls(props) {
  const { ref, focusKey, focusSelf } = useFocusable({
    onArrowPress: (direction) => onArrowPress(direction),
  });

  useEffect(() => {
    focusSelf();
    updateIcon();
  }, [focusSelf, props.direction]);

  const updateIcon = () => {
    switch (props.direction) {
      case "left":
        return (
          <SkipBackward
            className="icon"
            style={{
              color: "#38a9e1",
            }}
          />
        );
      case "right":
        return (
          <SkipForward
            className="icon"
            style={{
              color: "#38a9e1",
            }}
          />
        );
      case "play":
        return (
          <PauseIcon
            className="icon"
            style={{
              color: "#38a9e1",
            }}
          />
        );
      default:
        if (props.play) {
          <PauseIcon
            className="icon"
            style={{
              color: "#38a9e1",
            }}
          />;
        } else {
          <PlayIcon
            className="icon"
            style={{
              color: "#38a9e1",
            }}
          />;
        }
    }
  };

  const onArrowPress = (direction, KeyPressDetails) => {
    console.log(KeyPressDetails);
    switch (direction) {
      case "left":
        return props.skipBackward();
      case "right":
        return props.skipForward();
      case "up":
        return props.showControls();
      case "down":
        return props.showControls();
    }
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className="video-player-controls-overlay"
        style={{ visibility: props.visible ? "visible" : "hidden" }}
      >
        <div className="controls-wrapper">
          <div className="icon-wrapper">{updateIcon()}</div>
          <div className="progress-controls">
            <h1>{decodeHtmlWithoutDOM(props.titre)}</h1>
            <PlayerProgressBar
              currentTime={props.currentTime}
              duration={props.duration}
            />
          </div>
          <div className="icon-wrapper">
            <LogoBoule className="icon-boule" />
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}
