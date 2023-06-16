import React, { useRef, useEffect, useCallback } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useDispatch } from "react-redux";
import * as focusActions from "../../store/actions/focusActions";
import VideoItem from "../molecules/videoItem";

function VideosRow(props) {
  const { ref, focusKey, focusSelf } = useFocusable({
    onFocus: (FocusableComponentLayout) => {
      props.onRowFocus(FocusableComponentLayout);
    },
  });
  const videoRowRef = useRef(null);
  const dispatch = useDispatch();

  const onFocus = useCallback(
    (FocusableComponentLayout, index) => {
      videoRowRef.current.scrollTo({
        left: index === 0 ? 0 : FocusableComponentLayout.left - 150,
        behaviour: "smooth",
      });
      dispatch(focusActions.onFocusMenu(false));
    },
    [videoRowRef]
  );

  const onPress = (slug) => {
    props.onPress(slug);
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="videos-row-wrapper" ref={ref}>
        <h3>{props.list.titre}</h3>
        <div className="divider" />
        <div className="row-scrolling-wrapper" ref={videoRowRef}>
          <div className="row-content">
            {props.list.items.map((item, i) => (
              <VideoItem
                onFocus={onFocus}
                onPress={onPress}
                format={props.list.format}
                item={item}
                i={i}
              />
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

  const onPress = (slug) => {
    props.onPress(slug);
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="row-scrolling-wrapper" ref={ref}>
        <>
          {props.videosList.map((list, i) => (
            <VideosRow list={list} onRowFocus={onRowFocus} onPress={onPress} />
          ))}
        </>
      </div>
    </FocusContext.Provider>
  );
}
