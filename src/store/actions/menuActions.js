import { dataFormat, postData } from "../../mixins/formData";

export const SET_MENU_ITEMS = "SET_MENU_ITEMS";
export const RESET_MENU_INITIAL = "RESET_MENU_INITIAL";

export const getMenuItems = () => {
  return async (dispatch) => {
    try {
      const formData = dataFormat();
      const response = await postData("menu.inrees", formData);
      dispatch({
        type: SET_MENU_ITEMS,
        payload: response.data.menu,
      });
    } catch (error) {}
  };
};

export const resetInitialMenu = () => {
  return async (dispatch) => {
    await dispatch({
      type: RESET_MENU_INITIAL,
    });
  };
};
