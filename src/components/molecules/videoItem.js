import React from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";

export default function VideoItem(props) {
  const { ref, focused } = useFocusable({
    onFocus: (FocusableComponentLayout) =>
      props.onFocus(FocusableComponentLayout, props.i),
  });

  return (
    <div className="item-wrapper">
      <div ref={ref} className={focused ? "item focused" : "item"}></div>
    </div>
  );
}
