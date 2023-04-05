export const ON_MENU_FOCUS = "ON_MENU_FOCUS";

export const onFocusMenu = (value) => {
  return (dispatch) => {
    dispatch({
      type: ON_MENU_FOCUS,
      payload: value,
    });
  };
};
