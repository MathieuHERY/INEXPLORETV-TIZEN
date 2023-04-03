import { SET_VIDEOS_LIST } from "../actions/categoryActions";

const initialState = {
  push: [],
  liste: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIDEOS_LIST:
      return {
        ...state,
        liste: action.payload.data.liste,
        push: action.payload.data.pushvideotv,
      };
    default:
      return state;
  }
}

export default categoryReducer;
