import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import PushVideosRow from "./pushVideosRow";
import ContentRow from "./videosRow";
import Overlay from "./overlay";

export default function CategoryContent(props) {
  const { ref, focusKey, focusSelf } = useFocusable();
  const menuFocused = useSelector((state) => state.focusReducer.menuFocused);
  const navigate = useNavigate();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const onRowFocus = useCallback(
    (FocusableComponentLayout) => {
      ref.current.scrollTo({
        top: FocusableComponentLayout.y + 100,
        behaviour: "smooth",
      });
    },
    [ref]
  );

  const onFocusPush = useCallback(() => {
    ref.current.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, [ref]);

  const onPress = (slug) => {
    navigate(`/video/${slug}`);
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="content-container">
        <h1>{props.titre}</h1>
        <PushVideosRow
          pushVideos={props.videos.push}
          onFocusPush={onFocusPush}
          onPress={onPress}
          focusKey={"PUSH"}
        />
        <ContentRow
          videosList={props.videos.liste}
          onRowFocus={onRowFocus}
          onPress={onPress}
        />
        {menuFocused && <Overlay />}
      </div>
    </FocusContext.Provider>
  );
}
