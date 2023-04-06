import React, { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { VideoPlayButton, VideoMoreInformationsButton } from "../atoms/buttons";
import { ReactComponent as CatalogueLogoBaseline } from "../../assets/images/svg/catalogue-baseline-logo.svg";

export default function ProgramInformations(props) {
  const navigate = useNavigate();
  console.log(props.program);

  const onPress = () => {
    navigate(-1);
  };

  return (
    <div className="cover">
      <div className="wrapper">
        <img
          src={
            "https://medias.inrees.com/img/videos/mosaique_mobile_" +
            props.program.video.id +
            ".jpg" +
            ""
          }
        />
        <div className="container">
          <div className="program-infos">
            {props.program.video.catalogue !== "" && (
              <CatalogueLogoBaseline className="catalogue" />
            )}
            <h1>{props.program.video.titre}</h1>
            {props.program.video.theme !== undefined && (
              <div className="univers-tags">
                {props.program.video.theme.map((tag, i) => (
                  <span style={{ color: `#${tag.color}` }}>{tag.titre}</span>
                ))}
              </div>
            )}
            <p>
              {props.program.video.minitexte
                .replace(/\n|\r/g, " ")
                .split("<br/>")
                .join(" ")}
            </p>
            <div className="buttons-container">
              <VideoPlayButton
                text="Regarder"
                focusClassName={"video-page-buttons play focus"}
                blurClassName={"video-page-buttons play blur"}
                onPress={onPress}
              />
              <VideoMoreInformationsButton
                text="Plus d'informations"
                focusClassName={"video-page-buttons more-informations focus"}
                blurClassName={"video-page-buttons more-informations blur"}
                onPress={onPress}
              />
            </div>
            {props.program.acteurs.realisateurs !== undefined && (
              <div className="movie-actors-container">
                <h3>
                  {props.program.acteurs.realisateurs.length > 1
                    ? "Réalisateurs :"
                    : "Réalisateur :"}
                </h3>
                <span>
                  {props.program.acteurs.realisateurs.map((item, i) => {
                    if (i === 0) {
                      return `${item.prenom} ${item.nom}`;
                    } else {
                      return `, ${item.prenom} ${item.nom}`;
                    }
                  })}
                </span>
              </div>
            )}
            {props.program.acteurs.auteurs !== undefined && (
              <div className="movie-actors-container">
                <h3>
                  {props.program.acteurs.auteurs.length > 1
                    ? "Auteurs :"
                    : "Auteur :"}
                </h3>
                <span>
                  {props.program.acteurs.auteurs.map((item, i) => {
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
            <img src={props.program.video.imgvideoHaut}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
