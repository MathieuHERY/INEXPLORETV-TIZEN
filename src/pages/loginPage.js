import React, { useState, useEffect } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as authActions from "../store/actions/authActions";
import { Input } from "../components/atoms/input";
import { HomeButton } from "../components/atoms/buttons";

function FocusContainer(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { ref, focusKey, focusSelf } = useFocusable();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const submitLoginForm = async () => {
    try {
      const response = await dispatch(
        authActions.login({ email: email, password: password })
      );
      if (response) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <form ref={ref}>
        <Input
          value={email}
          type="email"
          focusClassName={"input-focus"}
          blurClassName={""}
          placeholder="Votre adresse email"
          onChange={onChangeEmail}
        />
        <Input
          value={password}
          type="password"
          focusClassName={"input-focus"}
          blurClassName={""}
          placeholder="Votre mot de passe"
          onChange={onChangePassword}
        />
        <HomeButton
          onPress={submitLoginForm}
          text="Se connecter"
          focusClassName={"home-button login-button focus"}
          blurClassName={"home-button blur login-button"}
        />
        <HomeButton
          text="Mot de passe oublié"
          focusClassName={"home-button focus"}
          blurClassName={"home-button blur"}
        />
      </form>
    </FocusContext.Provider>
  );
}

export default function LoginPage(props) {
  return (
    <div className="main full-width login-page-container">
      <div className="logo-container">
        <img />
      </div>
      <h1>Connexion à inexploré TV</h1>
      <FocusContainer />
    </div>
  );
}
