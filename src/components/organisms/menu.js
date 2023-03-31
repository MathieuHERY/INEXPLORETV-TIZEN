import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import * as menuActions from "../../store/actions/menuActions";
import Avatar from "../atoms/avatar";
import MenuItem from "../molecules/menuItems";

export default function Menu(props) {
  const { ref, focusKey, hasFocusedChild } = useFocusable({
    trackChildren: true,
  });
  const user = useSelector((state) => state.userReducer.client);
  const menu = useSelector((state) => state.menuReducer.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMenuItems() {
      try {
        const response = await dispatch(menuActions.getMenuItems());
      } catch (err) {}
    }
    getMenuItems();
  }, [dispatch]);

  return (
    <FocusContext.Provider value={focusKey}>
      <nav className="nav-container-shrink">
        <Avatar className="avatar-container-small" user={user} />
        <menu ref={ref}>
          {menu.map((item, i) => (
            <MenuItem item={item} />
          ))}
        </menu>
      </nav>
    </FocusContext.Provider>
  );
}
