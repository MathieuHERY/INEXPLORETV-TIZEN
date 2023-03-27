import React from "react";
import { Routes, Route } from "react-router-dom";

/* import pages */
import Splashscreen from "../pages/splashscreen";
import HomePage from "../pages/home";

export default function Navigation(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Splashscreen />} />
      <Route path="*" element={<Splashscreen />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
