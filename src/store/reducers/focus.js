import { ON_MENU_FOCUS } from "../actions/focusActions";

const initialState = {
  menuFocused: false,
};

function focusReducer(state = initialState, action) {
  switch (action.type) {
    case ON_MENU_FOCUS:
      return {
        ...state,
        menuFocused: action.payload,
      };

    default:
      return state;
  }
}

export default focusReducer;
