import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import * as videoActions from "../store/actions/videoActions";
import Menu from "../components/organisms/menu";
import ProgramInformations from "../components/organisms/programInformations";
import LoadPage from "./loadPage";
import Overlay from "../components/organisms/overlay";

function VideoPageContent(props) {
  const { ref, focusKey, focusSelf } = useFocusable();
  const menuFocused = useSelector((state) => state.focusReducer.menuFocused);

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="content-container">
        <ProgramInformations program={props.program.content} />
        {menuFocused && <Overlay />}
      </div>
    </FocusContext.Provider>
  );
}

export default function VideoPage(props) {
  const program = useSelector((state) => state.videoReducer);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getVideoContent() {
      try {
        await dispatch(videoActions.resetVideoContent());
        const response = await dispatch(
          videoActions.getVideoContent(params.slug)
        );
      } catch (error) {
        console.log(error);
      }
    }
    getVideoContent();
  }, [dispatch]);

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
