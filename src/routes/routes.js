import React from "react";
import { Routes, Route } from "react-router-dom";
import { init } from "@noriginmedia/norigin-spatial-navigation";

/* import pages */
import LaunchPage from "../pages/launchPage";
import StartUpPage from "../pages/startupPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import VideoPage from "../pages/videoPage";
import SearchPage from "../pages/searchPage";

export default function Navigation(props) {
  /* init spatial navigation */
  init();

  return (
    <Routes>
      <Route exact path="/" element={<LaunchPage />} />
      <Route path="*" element={<LaunchPage />} />
      <Route path="/startup" element={<StartUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/video/:slug" element={<VideoPage />} />
      <Route path="/recherche" element={<SearchPage />} />
    </Routes>
  );
}
