import React, { useRef, useEffect, useCallback } from "react";

export default function ProgramInformations(props) {
  return (
    <div className="program-informations-container">
      <div className="wrapper">
        <img
          src={
            "https://medias.inrees.com/img/videos/mosaique_mobile_" +
            props.program.video.id +
            ".jpg" +
            ""
          }
        ></img>
      </div>
    </div>
  );
}
