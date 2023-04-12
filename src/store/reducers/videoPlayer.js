import {
    SET_PLAYER_VIDEO_VISIBLE,
    RESET_PLAYER_VIDEO,
  } from '../actions/videoPlayerActions';
  
  const initialState = {
    visible: false,
    content: {},
  };
  
  function videoPlayerReducer(state = initialState, action) {
    switch (action.type) {
      case SET_PLAYER_VIDEO_VISIBLE:
        return {
          ...state,
          visible: true,
          content: action.payload.video,
        };
      case RESET_PLAYER_VIDEO:
        return initialState;
      default:
        return state;
    }
  }
  
  export default videoPlayerReducer;
  