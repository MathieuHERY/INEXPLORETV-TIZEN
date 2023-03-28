import React from "react";
import { Routes, Route } from "react-router-dom";
import { init } from "@noriginmedia/norigin-spatial-navigation";

/* import pages */
import Splashscreen from "../pages/splashscreen";
import HomePage from "../pages/home";
import LoadScreen from "../pages/loadscreen";

export default function Navigation(props) {
  /* init spatial navigation */
  init();

  return (
    <Routes>
      <Route exact path="/" element={<Splashscreen />} />
      <Route path="*" element={<Splashscreen />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
