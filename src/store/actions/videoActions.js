import { dataFormat, postData } from "../../mixins/formData";

export const SET_CONTENT = "SET_CONTENT";
export const SET_EPISODES_LIST = "SET_EPISODES_LIST";
export const SET_BONUS_LIST = "SET_BONUS_LIST";
export const SET_HAS_BONUS = "SET_HAS_BONUS";
export const RESET_CONTENT = "RESET_CONTENT";

export const getVideoContent = (slug) => {
  return async (dispatch) => {
    try {
      const formData = dataFormat();
      formData.append("slug", slug);
      const response = await postData("video.inrees", formData);
      if (response.data.status === "success") {
        dispatch({
          type: SET_CONTENT,
          payload: response.data,
        });
        dispatch(getEpisodesList(response.data.videosconnexes.episodes));
        if (response.data.videosconnexes.bonus !== undefined) {
          dispatch({
            type: SET_HAS_BONUS,
          });
          dispatch(getBonusList(response.data.videosconnexes.bonus));
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getEpisodesList = (files) => {
  return async (dispatch) => {
    for (const element of files) {
      try {
        const formData = dataFormat();
        formData.append("vid", element.vid);
        const response = await postData("mp4.inrees", formData);
        dispatch({
          type: SET_EPISODES_LIST,
          payload: response.data.item,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const getBonusList = (files) => {
  return async (dispatch) => {
    for (const element of files) {
      try {
        const formData = dataFormat();
        formData.append("vid", element.vid);
        const response = await postData("mp4.inrees", formData);
        dispatch({
          type: SET_BONUS_LIST,
          payload: response.data.item,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const resetVideoContent = () => {
  return async (dispatch) => {
    await dispatch({
      type: RESET_CONTENT,
    });
  };
};
