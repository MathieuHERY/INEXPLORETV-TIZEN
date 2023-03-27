import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import LogoAnimation from "../assets/json/logoAnimations.json";

export default function Splashscreen(props) {
  const navigate = useNavigate();

  const animationFinish = () => {
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="main full-width gradient-darkblue-purple splashscreen-container">
      <div className="animation-container">
        <Lottie
          animationData={LogoAnimation}
          autoPlay
          loop={false}
          onComplete={() => animationFinish()}
        />
      </div>
    </div>
  );
}
