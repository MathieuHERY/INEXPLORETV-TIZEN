import React from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { decodeHtmlWithoutDOM } from "../../mixins/decodeHtml";

export default function PushVideoItem(props) {
  const { ref, focused } = useFocusable({
    onFocus: (FocusableComponentLayout) =>
      props.onFocus(FocusableComponentLayout, props.i),
  });

  console.log(props.item);

  return (
    <div className="item-wrapper">
      <div ref={ref} className={focused ? "item focused" : "item"}>
        <div className="item-container">
          <img
            alt={props.item.titre}
            src={
              "https://medias.inrees.com/img/videos/mosaique_mobile_" +
              props.item.id +
              ".jpg" +
              ""
            }
          />
          <div className="program-info-container">
            <img src={props.item.imgvideoHaut} alt={props.item.titre} />
            <div className="infos-wrapper">
              <h4>{decodeHtmlWithoutDOM(props.item.titre)}</h4>
              <div className="univers-tags">
                {props.item.theme.map((tag, i) => (
                  <span style={{ color: `#${tag.color}` }}>{tag.titre}</span>
                ))}
              </div>
              <p>
                {props.item.minitexte
                  .replace(/\n|\r/g, " ")
                  .split("<br/>")
                  .join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
