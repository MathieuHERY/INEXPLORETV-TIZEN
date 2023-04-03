import React, { useRef, useEffect, useCallback } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import VideoItem from "../molecules/videoItem";

function VideosRow(props) {
  const { ref, focusKey, focusSelf } = useFocusable({
    onFocus: (FocusableComponentLayout) => {
      props.onRowFocus(FocusableComponentLayout);
    },
  });
  const videoRowRef = useRef(null);

  const onFocus = useCallback(
    (FocusableComponentLayout, index) => {
      videoRowRef.current.scrollTo({
        left: index === 0 ? 0 : FocusableComponentLayout.left,
        behaviour: "smooth",
      });
    },
    [videoRowRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="videos-row-wrapper" ref={ref}>
        <div className="row-scrolling-wrapper" ref={videoRowRef}>
          <div className="row-content">
            {props.list.items.map((item, i) => (
              <VideoItem onFocus={onFocus} i={i} />
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default function ContentRow(props) {
  const { ref, focusKey } = useFocusable({});

  const onRowFocus = (FocusableComponentLayout, index) => {
    props.onRowFocus(FocusableComponentLayout, index);
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="row-scrolling-wrapper" ref={ref}>
        <div>
          {props.videosList.map((list, i) => (
            <VideosRow list={list} onRowFocus={onRowFocus} />
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
}
