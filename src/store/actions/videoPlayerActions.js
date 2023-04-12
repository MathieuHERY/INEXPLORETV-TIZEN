
export const SET_PLAYER_VIDEO_VISIBLE = 'SET_PLAYER_VIDEO_VISIBLE';
export const RESET_PLAYER_VIDEO = 'RESET_PLAYER_VIDEO';

export const setPlayerVideoVisible = (video) => {
  return dispatch => {
    dispatch({
      type: SET_PLAYER_VIDEO_VISIBLE,
      payload: {
        video: video,
      },
    });
  };
};

export const resetPlayerVideo = () => {
  return dispatch => {
    dispatch({
      type: RESET_PLAYER_VIDEO,
    });
  };
};
