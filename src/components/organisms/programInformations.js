import React, { useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as videoPlayerActions from "../../store/actions/videoPlayerActions";
import { selectVideoFile } from "../../helpers/videoPlayerHelpers";
import { VideoPlayButton, VideoMoreInformationsButton } from "../atoms/buttons";
import { ReactComponent as CatalogueLogoBaseline } from "../../assets/images/svg/catalogue-baseline-logo.svg";

export default function ProgramInformations(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onPress = () => {
    const response = selectVideoFile(props.program.episodes[0]);
    console.log(response);
    /*   dispatch(
      videoPlayerActions.setPlayerVideoVisible(props.program.episodes[0])
    );
    navigate('/player') */
  };

  const onFocus = () => {
    props.onFocus();
  };

  return (
    <div className="cover">
      <div className="wrapper">
        <img
          src={
            "https://medias.inrees.com/img/videos/mosaique_mobile_" +
            props.program.content.video.id +
            ".jpg" +
            ""
          }
        />
        <div className="container">
          <div className="program-infos">
            {props.program.content.video.catalogue !== "" && (
              <CatalogueLogoBaseline className="catalogue" />
            )}
            <h1>{props.program.content.video.titre}</h1>
            {props.program.content.video.theme !== undefined && (
              <div className="univers-tags">
                {props.program.content.video.theme.map((tag, i) => (
                  <span style={{ color: `#${tag.color}` }}>{tag.titre}</span>
                ))}
              </div>
            )}
            <p>
              {props.program.content.video.minitexte
                .replace(/\n|\r/g, " ")
                .split("<br/>")
                .join(" ")}
            </p>
            <div className="buttons-container">
              {props.program.episodes.length !== 0 && (
                <VideoPlayButton
                  text="Regarder"
                  focusClassName={"video-page-buttons play focus"}
                  blurClassName={"video-page-buttons play blur"}
                  onPress={onPress}
                  onFocus={onFocus}
                />
              )}

              <VideoMoreInformationsButton
                text="Plus d'informations"
                focusClassName={"video-page-buttons more-informations focus"}
                blurClassName={"video-page-buttons more-informations blur"}
                onPress={onPress}
                onFocus={onFocus}
              />
            </div>
            {props.program.content.acteurs.realisateurs !== undefined && (
              <div className="movie-actors-container">
                <h3>
                  {props.program.content.acteurs.realisateurs.length > 1
                    ? "Réalisateurs :"
                    : "Réalisateur :"}
                </h3>
                <span>
                  {props.program.content.acteurs.realisateurs.map((item, i) => {
                    if (i === 0) {
                      return `${item.prenom} ${item.nom}`;
                    } else {
                      return `, ${item.prenom} ${item.nom}`;
                    }
                  })}
                </span>
              </div>
            )}
            {props.program.content.acteurs.auteurs !== undefined && (
              <div className="movie-actors-container">
                <h3>
                  {props.program.content.acteurs.auteurs.length > 1
                    ? "Auteurs :"
                    : "Auteur :"}
                </h3>
                <span>
                  {props.program.content.acteurs.auteurs.map((item, i) => {
                    if (i === 0) {
                      return `${item.prenom} ${item.nom}`;
                    } else {
                      return `, ${item.prenom} ${item.nom}`;
                    }
                  })}
                </span>
              </div>
            )}
          </div>
          <div className="program-image-wrapper">
            <img src={props.program.content.video.imgvideoHaut}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
