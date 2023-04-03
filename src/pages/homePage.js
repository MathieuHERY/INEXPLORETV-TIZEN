import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import * as categoryActions from "../store/actions/categoryActions";
import Menu from "../components/organisms/menu";
import PushVideosRow from "../components/organisms/pushVideosRow";
import ContentRow from "../components/organisms/videosRow";

function HomePageContent(props) {
  const videos = useSelector((state) => state.categoryReducer);
  const { ref, focusKey, focusSelf } = useFocusable();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getHomeContent() {
      const response = await dispatch(categoryActions.getHomeContent());
    }
    getHomeContent();
  }, [dispatch]);

  const onRowFocus = useCallback(
    (FocusableComponentLayout, index) => {
      console.log("onRowFocus");
      window.scroll({
        top: FocusableComponentLayout.y,
        left: 0,
        behaviour: "smooth",
      });
      ref.current.scrollTo({
        top: FocusableComponentLayout.y,
        behaviour: "smooth",
      });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="content-container">
        <PushVideosRow pushVideos={videos.push} focusKey="PUSH" />
        <ContentRow videosList={videos.liste} onRowFocus={onRowFocus} />
      </div>
    </FocusContext.Provider>
  );
}

export default function HomePage(props) {
  return (
    <div className="full-width gradient-darkblue-purple homepage-container">
      <Menu />
      <HomePageContent focusKey="PUSH" />
    </div>
  );
}
