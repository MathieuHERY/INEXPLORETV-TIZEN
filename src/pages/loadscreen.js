import React from "react";
import Loader from "../components/atoms/loader";

export default function LoadScreen(props) {
  return (
    <div className="main full-width gradient-darkblue-purple loader-container">
      <Loader width="130" height="130" color="#ffffff" />
      <div className="logo-container">
        <img />
      </div>
    </div>
  );
}
