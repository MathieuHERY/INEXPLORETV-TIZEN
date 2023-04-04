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
        <h1>Bienvenue sur inexploré TV</h1>
        <PushVideosRow pushVideos={props.videos.push} focusKey="PUSH" />
        <ContentRow videosList={props.videos.liste} onRowFocus={onRowFocus} />
      </div>
    </FocusContext.Provider>
  );
}

export default function HomePage(props) {
  const videos = useSelector((state) => state.categoryReducer);

  return (
    <div className="full-width gradient-darkblue-purple homepage-container">
      <Menu />
      <HomePageContent videos={videos} focusKey="PUSH" />
    </div>
  );
}
