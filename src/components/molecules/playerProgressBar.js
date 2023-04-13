import React from "react";
import ReactSlider from "react-slider";

export default function PlayerProgressBar(props) {

  const getMinutesFromSeconds = (time) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : "0" + minutes}:${
      seconds >= 10 ? seconds : "0" + seconds
    }`;
  };

  const position = getMinutesFromSeconds(props.currentTime);

  const fullDuration = getMinutesFromSeconds(props.duration);

  /*   const currentTime = props.currentTime;
  const duration = props.duration;

  console.log(currentTime);

  const handleOnSlide = (time) => {
    props.onSlideCapture({ seekTime: time });
  };

  const onSlideStart = () => {
    props.onSlideStart();
  };

  const onSlideComplete = () => {
    props.onSlideComplete();
  };
 */
  return (
    <div className="progress-wrapper">
      <ReactSlider
        value={props.currentTime}
        min={0}
        max={props.duration}
        className="slider"
        trackClassName="slider-track"
        /*    onAfterChange={onSlideComplete}
        onBeforeChange={onSlideStart}
        onChange={handleOnSlide} */
      />
      <div className="time-wrapper">
        <span>{position}</span>
        <span>{fullDuration}</span>
      </div>
    </div>
  );
}
