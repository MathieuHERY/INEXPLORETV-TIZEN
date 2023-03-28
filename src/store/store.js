import { configureStore } from "@reduxjs/toolkit";

/* reducers */

import userReducer from "./reducers/user";

export const store = configureStore({
  reducer: { userReducer: userReducer },
});

export default store;
