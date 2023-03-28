import React from "react";
import { Routes, Route } from "react-router-dom";
import { init } from "@noriginmedia/norigin-spatial-navigation";

/* import pages */
import Splashscreen from "../pages/splashscreen";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import Logged from "../pages/logged";

export default function Navigation(props) {
  /* init spatial navigation */
  init();

  return (
    <Routes>
      <Route exact path="/" element={<Splashscreen />} />
      <Route path="*" element={<Splashscreen />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logged" element={<Logged />} />
    </Routes>
  );
}
