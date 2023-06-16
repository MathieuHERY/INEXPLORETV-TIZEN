import React, { useRef, useCallback } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useDispatch } from "react-redux";
import * as focusActions from "../../store/actions/focusActions";
import PushVideoItem from "../molecules/pushVideoItem";

export default function PushVideosRow(props) {
  const { ref, focusKey } = useFocusable({});
  const pushVideoRef = useRef(null);
  const dispatch = useDispatch();

  const onFocus = useCallback(
    (FocusableComponentLayout, index) => {
      props.onFocusPush();
      pushVideoRef.current.scrollTo({
        left: index === 0 ? 0 : FocusableComponentLayout.left,
        behaviour: "smooth",
      });
      dispatch(focusActions.onFocusMenu(false));
    },
    [pushVideoRef]
  );

  const onPress = (slug) => {
    props.onPress(slug);
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="pushvideo-row-wrapper" ref={ref}>
        <div className="row-scrolling-wrapper" ref={pushVideoRef}>
          <div className="row-content">
            {props.pushVideos.map((item, i) => (
              <PushVideoItem
                onFocus={onFocus}
                onPress={onPress}
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
