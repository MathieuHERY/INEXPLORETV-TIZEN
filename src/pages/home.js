import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useDispatch } from "react-redux";
import * as unloggedActions from "../store/actions/unloggedActions";
import { HomeButton } from "../components/atoms/buttons";
import LoadScreen from "./loadscreen";

function FocusContainer(props) {
  const { ref, focusKey, focusSelf } = useFocusable();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="button-container" ref={ref}>
        <HomeButton
          text={props.textButton}
          focusClassName={"home-button focus"}
          blurClassName={"home-button blur"}
        />
      </div>
    </FocusContext.Provider>
  );
}

export default function HomePage(props) {
  const [assets, setAssets] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getHomescreenAssets() {
      const response = await dispatch(unloggedActions.getHomescreenAssets());
      setAssets(response.data);
    }
    getHomescreenAssets();
  }, [dispatch]);

  if (assets === null) {
    return <LoadScreen />;
  } else {
    return (
      <div className="full-width home-video-container">
        <ReactPlayer
          className="video"
          url={assets.videoMP4}
          width="100%"
          height="100%"
          controls={false}
          loop={true}
          muted
          playing
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              },
            },
          }}
        />
        <div className="content">
          <div className="logo-container">
            <img />
          </div>
          <h1>{assets.titre}</h1>
          <h2>{assets.stitre}</h2>
          <FocusContainer textButton={assets.btnLabel} />
        </div>
      </div>
    );
  }
}
