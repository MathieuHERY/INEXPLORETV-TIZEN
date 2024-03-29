import { configureStore } from "@reduxjs/toolkit";

/* reducers */
import userReducer from "./reducers/user";
import menuReducer from "./reducers/menu";
import categoryReducer from "./reducers/category";
import videoReducer from "./reducers/video";
import focusReducer from "./reducers/focus";
import videoPlayerReducer from "./reducers/videoPlayer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    menuReducer: menuReducer,
    categoryReducer: categoryReducer,
    videoReducer: videoReducer,
    focusReducer: focusReducer,
    videoPlayerReducer:videoPlayerReducer
  },
});

export default store;
