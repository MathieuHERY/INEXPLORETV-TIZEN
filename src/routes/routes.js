import React from "react";
import { Routes, Route } from "react-router-dom";
import { init } from "@noriginmedia/norigin-spatial-navigation";

/* import pages */
import LaunchPage from "../pages/launchPage";
import StartUpPage from "../pages/startupPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import CategoryPage from "../pages/categoryPage";
import VideoPage from "../pages/videoPage";
import VideoPlayer from "../pages/videoPlayer";
import SearchPage from "../pages/searchPage";

export default function Navigation(props) {
  /* init spatial navigation */
  init({ throttle: 1, throttleKeypresses: true });

  return (
    <Routes>
      <Route exact path="/" element={<LaunchPage />} />
      <Route path="*" element={<LaunchPage />} />
      <Route path="/startup" element={<StartUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/video/:slug" element={<VideoPage />} />
      <Route path="player" element={<VideoPlayer />} />
      <Route path="/recherche" element={<SearchPage />} />
    </Routes>
  );
}
