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

export const getCategoryVideo = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const formData = dataFormat();
      formData.append("idcat", id);
      const response = await postData("categorie.inrees", formData);
      console.log(response)
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
