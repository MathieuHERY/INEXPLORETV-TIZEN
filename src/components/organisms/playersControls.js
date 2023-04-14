import React, { useRef, useEffect, useCallback } from "react";

import PlayerProgressBar from "../molecules/playerProgressBar";
import { decodeHtmlWithoutDOM } from "../../helpers/decodeHtml";
import { ReactComponent as PlayIcon } from "../../assets/images/svg/play-rounded.svg";
import { ReactComponent as SkipForward } from "../../assets/images/svg/forward.svg";
import { ReactComponent as SkipBackward } from "../../assets/images/svg/backward.svg";
import { ReactComponent as PauseIcon } from "../../assets/images/svg/pause.svg";
import { ReactComponent as LogoBoule } from "../../assets/images/svg/logo-retina-boule.svg";

export default function PlayerControls(props) {
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
      case "pause":
        return (
          <PlayIcon
            className="icon"
            style={{
              color: "#38a9e1",
            }}
          />
        );
    }
  };

  return (
    <div
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
  );
}
