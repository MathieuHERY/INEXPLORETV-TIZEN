import React, { useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import * as videoActions from "../store/actions/videoActions";
import UseKeys from "../helpers/keysHelpers";
import Menu from "../components/organisms/menu";
import ProgramInformations from "../components/organisms/programInformations";
import LoadPage from "./loadPage";
import Overlay from "../components/organisms/overlay";
import ContentRow from "../components/organisms/videosRow";
import { KEYS } from "../constants/keys";

function VideoPageContent(props) {
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

  const scrollTop = useCallback(() => {
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
        <ProgramInformations program={props.program} onFocus={scrollTop} />
        <ContentRow
          videosList={props.program.content.liste}
          onRowFocus={onRowFocus}
          onPress={onPress}
        />
        {menuFocused && <Overlay />}
      </div>
    </FocusContext.Provider>
  );
}

export default function VideoPage(props) {
  const program = useSelector((state) => state.videoReducer);
  const videoPlayer = useSelector((state) => state.videoPlayerReducer);

  const params = useParams();
  const dispatch = useDispatch();
  const keyHandler = UseKeys();
  const navigate = useNavigate();

  useEffect(() => {
    async function getVideoContent() {
      try {
        if (program.content.length !== 0) {
          if (program.content.video.slug !== params.slug) {
            await dispatch(videoActions.resetVideoContent());
            await dispatch(videoActions.getVideoContent(params.slug));
          }
        } else {
          await dispatch(videoActions.getVideoContent(params.slug));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getVideoContent();
  }, [dispatch, params.slug]);

  useEffect(() => {
    function goBack() {
      KEYS.back.map((key, i) => {
        if (keyHandler === key) {
          dispatch(videoActions.resetVideoContent());
          navigate(-1);
        }
      });
    }
    goBack();
  }, [keyHandler]);

  if (program.content.length === 0) {
    return <LoadPage />;
  } else {
    return (
      <div className="full-width gradient-darkblue-purple videopage-container">
        <Menu />
        <VideoPageContent program={program} />
      </div>
    );
  }
}
