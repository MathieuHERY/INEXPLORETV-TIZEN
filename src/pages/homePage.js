import React from "react";
import Menu from "../components/organisms/menu";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage(props) {
  const user = useSelector((state) => state.userReducer.client);
  return (
    <div className="full-width gradient-darkblue-purple homepage-container">
      <Menu />
      <div className="content-container">
        
      </div>
    </div>
  );
}
