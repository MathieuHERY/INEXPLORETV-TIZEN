import {
  SET_CONTENT,
  SET_EPISODES_LIST,
  SET_BONUS_LIST,
  SET_HAS_BONUS,
  RESET_CONTENT,
} from "../actions/videoActions";

const initialState = {
  content: [],
  episodes: [],
  bonus: [],
  hasBonus: false,
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTENT:
      return { ...state, content: action.payload };
    case SET_EPISODES_LIST:
      return { ...state, episodes: [...state.episodes, action.payload] };
    case SET_BONUS_LIST:
      return { ...state, bonus: [...state.bonus, action.payload] };
    case SET_HAS_BONUS:
      return { ...state, hasBonus: true };
    case RESET_CONTENT:
      return initialState;
    default:
      return state;
  }
}

export default videoReducer;
