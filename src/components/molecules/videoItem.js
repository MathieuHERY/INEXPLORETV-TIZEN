import React from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { decodeHtmlWithoutDOM } from "../../helpers/decodeHtml";
import { ReactComponent as PlayRoundIcon } from "../../assets/images/svg/play-rounded.svg";

export default function VideoItem(props) {
  const { ref, focused } = useFocusable({
    onFocus: (FocusableComponentLayout) =>
      props.onFocus(FocusableComponentLayout, props.i),
    onEnterPress: () => props.onPress(props.item.slug),
  });

  const imgFormat = () => {
    if (props.format === "imgVideoHaut") {
      return "video-haut";
    } else {
      return "home";
    }
  };

  return (
    <div className="item-wrapper">
      <div
        ref={ref}
        className={
          focused
            ? `item item-${imgFormat()} focused`
            : `item item-${imgFormat()}`
        }
      >
        <div className={`img-${imgFormat()}`}>
          <img
            src={
              props.format === "imgVideoHaut"
                ? props.item.imgvideoHaut
                : props.item.imgHome
            }
            alt={props.item.titre}
          />
          <PlayRoundIcon
            className="icon"
            style={{
              color: "rgba(255, 255, 255, 0.47)",
            }}
          />
        </div>
        {props.item.theme !== undefined && (
          <span
            style={{
              color: `#${props.item.theme[0].color}`,
              marginLeft: focused && "5px",
            }}
          >
            {props.item.theme[0].titre}
          </span>
        )}
        <h4
          style={{
            marginLeft: focused && "5px",
          }}
        >
          {decodeHtmlWithoutDOM(props.item.titre)}
        </h4>
      </div>
    </div>
  );
}
