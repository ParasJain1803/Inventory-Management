import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../utils/slice/user.slice.js";
import sidebarReducer from "../utils/slice/Sidebar.slice.js";

export const store = configureStore({
  reducer: {
    UserSlice: userReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

setupListeners(store.dispatch);
