import { configureStore } from "@reduxjs/toolkit";

/* reducers */
import userReducer from "./reducers/user";
import menuReducer from "./reducers/menu";

export const store = configureStore({
  reducer: { userReducer: userReducer, menuReducer: menuReducer },
});

export default store;
