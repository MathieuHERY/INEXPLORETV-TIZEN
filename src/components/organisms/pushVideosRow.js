import React, { useRef, useEffect, useCallback } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import PushVideoItem from "../molecules/pushVideoItem";

export default function PushVideosRow(props) {
  const { ref, focusKey, focusSelf } = useFocusable({});
  const pushVideoRef = useRef(null);

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const onFocus = useCallback(
    (FocusableComponentLayout, index) => {
      pushVideoRef.current.scrollTo({
        left: index === 0 ? 0 : FocusableComponentLayout.left,
        behaviour: "smooth",
      });
    },
    [pushVideoRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="pushvideo-row-wrapper" ref={ref}>
        <div className="row-scrolling-wrapper" ref={pushVideoRef}>
          <div className="row-content">
            {props.pushVideos.map((item, i) => (
              <PushVideoItem onFocus={onFocus} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}
