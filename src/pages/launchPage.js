import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../store/actions/authActions";
import Lottie from "lottie-react";
import LogoAnimation from "../assets/json/logoAnimations.json";

export default function LaunchPage(props) {
  const [hasLocalStorage, setHasLocalStorage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageValues = JSON.parse(localStorage.getItem("client"));
    if (localStorageValues) {
      setHasLocalStorage(localStorageValues);
    }
  }, []);

  const animationFinish = () => {
    setTimeout(async () => {
      await tryAutoLogin();
    }, 1000);
  };

  const tryAutoLogin = async () => {
    try {
      if (hasLocalStorage) {
        const response = await dispatch(authActions.tryAutoLogin());
        if (response) {
          navigate("/home");
        } else {
          navigate("/login");
        }
      } else {
        navigate("/startup");
      }
    } catch (err) {
      navigate("/startup");
    }
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
