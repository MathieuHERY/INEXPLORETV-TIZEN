import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import * as categoryActions from "../store/actions/categoryActions";
import LoadPage from "./loadPage";
import Menu from "../components/organisms/menu";
import PushVideosRow from "../components/organisms/pushVideosRow";
import ContentRow from "../components/organisms/videosRow";
import Overlay from "../components/organisms/overlay";

function HomePageContent(props) {
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
        <h1>Bienvenue sur inexploré TV</h1>
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

export default function HomePage(props) {
  const videos = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getHomeContent() {
      try {
        const response = await dispatch(categoryActions.getHomeContent());
      } catch (error) {
        console.log(error);
      }
    }
    getHomeContent();
  }, [dispatch]);

  if (videos.liste.length === 0) {
    return <LoadPage />;
  } else {
    return (
      <div className="full-width gradient-darkblue-purple homepage-container">
        <Menu />
        <HomePageContent videos={videos} />
      </div>
    );
  }
}
