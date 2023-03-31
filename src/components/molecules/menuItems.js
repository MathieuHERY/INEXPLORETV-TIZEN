import React from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import SearchIcon from "../../assets/images/svg/search.svg";
import CalendarIcon from "../../assets/images/svg/calendar.svg";

export default function MenuItem(props) {
  const { ref, focused } = useFocusable({ onEnterPress: () => onPress(
  )});

  if (props.item.titre === "Rechercher") {
    return (
      <div ref={ref} className={"menu-item"}>
        <img className="icon" src={SearchIcon} />
      </div>
    );
  } else {
    if (props.item.titre === "Nouveautés") {
      return (
        <div ref={ref} className={"menu-item"}>
          <img className="icon" src={CalendarIcon} />
        </div>
      );
    } else {
      if (props.item.idcat >= 0) {
        if (props.item.idcat === 0) {
          return (
            <div
              ref={ref}
              className={
                window.location.pathname === "/home"
                  ? "menu-item selected"
                  : "menu-item"
              }
            >
              <img className="icon" src={props.item.picto} />
            </div>
          );
        } else {
          return (
            <div ref={ref} className={"menu-item"}>
              <img className="icon" src={props.item.picto} />
            </div>
          );
        }
      } else {
        return (
          <div ref={ref} className={"menu-item"}>
            <img className="icon" src={props.item.picto} />
          </div>
        );
      }
    }
  }
}
