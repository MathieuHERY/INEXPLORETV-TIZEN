import { dataFormat, postData } from "../../mixins/formData";

export const SET_VIDEOS_LIST = "SET_VIDEOS_LIST";

export const getHomeContent = () => {
  return async (dispatch) => {
    try {
      const formData = dataFormat();
      const response = await postData("accueil-abo.inrees", formData);
      dispatch({
        type: SET_VIDEOS_LIST,
        payload: {
          data: response.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
