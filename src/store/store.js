import { configureStore } from "@reduxjs/toolkit";

/* reducers */
import userReducer from "./reducers/user";
import menuReducer from "./reducers/menu";
import categoryReducer from "./reducers/category";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    menuReducer: menuReducer,
    categoryReducer: categoryReducer,
  },
});

export default store;
