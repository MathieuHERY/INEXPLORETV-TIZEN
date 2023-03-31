import React from "react";

export default function Avatar(props) {
  return (
    <div className={props.className}>
      <div className="avatar-wrapper">
        <span>
          {props.user.prenom[0].toUpperCase() + props.user.nom[0].toUpperCase()}
        </span>
      </div>
    </div>
  );
}
