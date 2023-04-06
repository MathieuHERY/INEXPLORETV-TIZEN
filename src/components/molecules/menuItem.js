import React, { useEffect } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { useDispatch, useSelector } from "react-redux";
import * as focusActions from "../../store/actions/focusActions";
import * as menuActions from "../../store/actions/menuActions";
import { ReactComponent as SearchIcon } from "../../assets/images/svg/search.svg";
import { ReactComponent as CalendarIcon } from "../../assets/images/svg/calendar.svg";

export default function MenuItem(props) {
  const menuIndexSelected = useSelector(
    (state) => state.menuReducer.menuIndexSelected
  );

  const dispatch = useDispatch();

  const { ref, focused } = useFocusable({
    onFocus: () => {
      dispatch(focusActions.onFocusMenu(true));
    },
    onBlur: () => {
      dispatch(focusActions.onFocusMenu(false));
    },
    onEnterPress: () => {
      dispatch(menuActions.setMenuIndexSelected(props.index));
    },
  });

  if (props.item.titre === "Rechercher") {
    return (
      <div
        ref={ref}
        key={props.index}
        className={
          props.hasFocusedChild
            ? menuIndexSelected === props.index
              ? focused
                ? "menu-item-open menu-focused menu-selected"
                : "menu-item-open menu-focused"
              : focused
              ? "menu-item-open menu-focused menu-selected"
              : "menu-item-open"
            : menuIndexSelected === props.index
            ? "menu-item menu-selected"
            : "menu-item"
        }
      >
        <SearchIcon className="icon" />
        {props.hasFocusedChild && <span>Rechercher</span>}
      </div>
    );
  } else {
    if (props.item.titre === "Nouveautés") {
      return (
        <div
          ref={ref}
          key={props.index}
          className={
            props.hasFocusedChild
              ? menuIndexSelected === props.index
                ? focused
                  ? "menu-item-open menu-focused menu-selected"
                  : "menu-item-open menu-focused"
                : focused
                ? "menu-item-open menu-focused menu-selected"
                : "menu-item-open"
              : menuIndexSelected === props.index
              ? "menu-item menu-selected"
              : "menu-item"
          }
        >
          <CalendarIcon className="icon" />
          {props.hasFocusedChild && <span>Nouveautés</span>}
        </div>
      );
    } else {
      if (props.item.idcat >= 0) {
        if (props.item.idcat === 0) {
          return (
            <div
              ref={ref}
              key={props.index}
              className={
                props.hasFocusedChild
                  ? menuIndexSelected === props.index
                    ? focused
                      ? "menu-item-open menu-focused menu-selected"
                      : "menu-item-open menu-focused"
                    : focused
                    ? "menu-item-open menu-focused menu-selected"
                    : "menu-item-open"
                  : menuIndexSelected === props.index
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
              key={props.index}
              className={
                props.hasFocusedChild
                  ? menuIndexSelected === props.index
                    ? focused
                      ? "menu-item-open menu-focused menu-selected"
                      : "menu-item-open menu-focused"
                    : focused
                    ? "menu-item-open menu-focused menu-selected"
                    : "menu-item-open"
                  : menuIndexSelected === props.index
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
            key={props.index}
            className={
              props.hasFocusedChild
                ? menuIndexSelected === props.index
                  ? focused
                    ? "menu-item-open menu-focused menu-selected"
                    : "menu-item-open menu-focused"
                  : focused
                  ? "menu-item-open menu-focused menu-selected"
                  : "menu-item-open"
                : menuIndexSelected === props.index
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
