import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Logged(props) {
  const user = useSelector((state) => state.userReducer.client);
  return (
    <div>
      <h1 style={{ color: "white" }}>{user.prenom} {user.nom}</h1>
    </div>
  );
}
