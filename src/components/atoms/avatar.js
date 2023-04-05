import React from "react";

export default function Avatar(props) {
  return (
    <div className="avatar-container">
      <div
        className={
          props.hasFocusedChild ? "avatar-wrapper-big" : "avatar-wrapper-small"
        }
      >
        <span>
          {props.user.prenom[0].toUpperCase() + props.user.nom[0].toUpperCase()}
        </span>
      </div>
    </div>
  );
}
