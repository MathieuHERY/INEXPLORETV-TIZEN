import { SET_MENU_ITEMS, RESET_MENU_INITIAL } from "../actions/menuActions";

const initialState = {
  menu: [],
  resetMenu: false,
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_ITEMS:
      const missingItems = [{ titre: "Nouveautés" }, { titre: "Rechercher" }];
      const newMenu = action.payload.concat(missingItems);
      return { ...state, menu: newMenu, resetMenu: false };
    case RESET_MENU_INITIAL:
      return initialState;
    default:
      return state;
  }
}

export default menuReducer;
