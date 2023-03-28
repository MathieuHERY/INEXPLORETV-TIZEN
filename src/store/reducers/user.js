import {
  SET_USER_CONNECTED,
/*   DID_TRY_LOGIN, */
  /*     LOG_OUT, */
} from "../actions/authActions";

const initialState = {
  client: null,
  
};

function userReducer(state = initialState, action) {
  switch (action.type) {
   /*  case DID_TRY_LOGIN:
      return { ...state, tryLogin: true }; */
    case SET_USER_CONNECTED:
      return { ...state, client: action.payload };
    /*       case LOG_OUT:
        return {client: null, tryLogin: true}; */
    default:
      return state;
  }
}

export default userReducer;
