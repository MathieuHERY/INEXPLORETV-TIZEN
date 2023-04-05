import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import Menu from "../components/organisms/menu";

export default function SearchPage(props) {
    
  return (
    <div className="full-width gradient-darkblue-purple homepage-container">
      <Menu />
    </div>
  );
}
