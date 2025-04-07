import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../utils/slice/user.slice.js";
import sidebarReducer from "../utils/slice/Sidebar.slice.js";
import AuthApi from "./queries/Auth.query.js";

export const store = configureStore({
  reducer: {
    UserSlice: userReducer,
    SideBar: sidebarReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (d) => d().concat(AuthApi.middleware),
});

setupListeners(store.dispatch);
