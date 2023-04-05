import React, { useEffect } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useDispatch } from "react-redux";
import * as focusActions from "../../store/actions/focusActions";
import SearchIcon from "../../assets/images/svg/search.svg";
import CalendarIcon from "../../assets/images/svg/calendar.svg";

export default function MenuItem(props) {
  const dispatch = useDispatch();
  const { ref, focused } = useFocusable({
    onFocus: () => {
      dispatch(focusActions.onFocusMenu(true));
    },
    onBlur: () => {
      dispatch(focusActions.onFocusMenu(false));
    },
  });

  if (props.item.titre === "Rechercher") {
    return (
      <div
        ref={ref}
        className={
          props.hasFocusedChild
            ? window.location.pathname === "/recherche"
              ? focused
                ? "menu-item-open menu-focused menu-selected"
                : "menu-item-open menu-focused"
              : focused
              ? "menu-item-open menu-focused menu-selected"
              : "menu-item-open"
            : window.location.pathname === "/recherche"
            ? "menu-item menu-selected"
            : "menu-item"
        }
      >
        <img className="icon" src={SearchIcon} />
        {props.hasFocusedChild && <span>Rechercher</span>}
      </div>
    );
  } else {
    if (props.item.titre === "Nouveautés") {
      return (
        <div
          ref={ref}
          className={
            props.hasFocusedChild
              ? window.location.pathname === "/nouveautes"
                ? focused
                  ? "menu-item-open menu-focused menu-selected"
                  : "menu-item-open menu-focused"
                : focused
                ? "menu-item-open menu-focused menu-selected"
                : "menu-item-open"
              : window.location.pathname === "/nouveautes"
              ? "menu-item menu-selected"
              : "menu-item"
          }
        >
          <img className="icon" src={CalendarIcon} />
          {props.hasFocusedChild && <span>Nouveautés</span>}
        </div>
      );
    } else {
      if (props.item.idcat >= 0) {
        if (props.item.idcat === 0) {
          return (
            <div
              ref={ref}
              className={
                props.hasFocusedChild
                  ? window.location.pathname === "/home"
                    ? focused
                      ? "menu-item-open menu-focused menu-selected"
                      : "menu-item-open menu-focused"
                    : focused
                    ? "menu-item-open menu-focused menu-selected"
                    : "menu-item-open"
                  : window.location.pathname === "/home"
                  ? "menu-item menu-selected"
                  : "menu-item"
              }
            >
              <img className="icon" src={props.item.picto} />
              {props.hasFocusedChild && <span>{props.item.titre}</span>}
            </div>
          );
        } else {
          return (
            <div
              ref={ref}
              className={
                props.hasFocusedChild
                  ? window.location.pathname === "/categorie"
                    ? focused
                      ? "menu-item-open menu-focused menu-selected"
                      : "menu-item-open menu-focused"
                    : focused
                    ? "menu-item-open menu-focused menu-selected"
                    : "menu-item-open"
                  : window.location.pathname === "/categorie"
                  ? "menu-item menu-selected"
                  : "menu-item"
              }
            >
              <img className="icon" src={props.item.picto} />
              {props.hasFocusedChild && <span>{props.item.titre}</span>}
            </div>
          );
        }
      } else {
        return (
          <div
            ref={ref}
            className={
              props.hasFocusedChild
                ? window.location.pathname === "/categorie"
                  ? focused
                    ? "menu-item-open menu-focused menu-selected"
                    : "menu-item-open menu-focused"
                  : focused
                  ? "menu-item-open menu-focused menu-selected"
                  : "menu-item-open"
                : window.location.pathname === "/categorie"
                ? "menu-item menu-selected"
                : "menu-item"
            }
          >
            <img className="icon" src={props.item.picto} />
            {props.hasFocusedChild && <span>{props.item.titre}</span>}
          </div>
        );
      }
    }
  }
}
