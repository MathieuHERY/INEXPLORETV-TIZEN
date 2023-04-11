import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ReactComponent as PlayRoundIcon } from "../../assets/images/svg/play-rounded.svg";
import { ReactComponent as Glasses } from "../../assets/images/svg/glasses.svg";

function HomeButton(props) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => props.onPress(),
  });

  return (
    <div
      ref={ref}
      className={focused ? props.focusClassName : props.blurClassName}
    >
      <span>{props.text}</span>
    </div>
  );
}

function VideoPlayButton(props) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => props.onPress(),
    onFocus: () => props.onFocus(),
  });

  return (
    <div
      ref={ref}
      className={focused ? props.focusClassName : props.blurClassName}
    >
      <PlayRoundIcon
        className="icon"
        style={{ color: focused ? "#38a9e1" : "rgba(255, 255, 255, 0.47)" }}
      />
      <span>{props.text}</span>
    </div>
  );
}

function VideoMoreInformationsButton(props) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => onPress(),
    onFocus: () => props.onFocus(),
  });

  const onPress = () => {
    props.onPress();
  };

  return (
    <div
      ref={ref}
      className={focused ? props.focusClassName : props.blurClassName}
    >
      <Glasses
        className="icon"
        style={{ color: focused ? "#38a9e1" : "rgba(255, 255, 255, 0.47)" }}
      />
      <span>{props.text}</span>
    </div>
  );
}

export { HomeButton, VideoPlayButton, VideoMoreInformationsButton };
