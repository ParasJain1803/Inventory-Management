import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserSlice } from "../utils/slice/user.slice.js";
// import sidebarReducer from "../utils/slice/Sidebar.slice.js";
import AuthApi from "./queries/Auth.query.js";
import { SidebarSlice } from "./slice/Sidebar.slice.js";

export const store = configureStore({
  reducer: {
    [UserSlice.name]: UserSlice.reducer,

    [SidebarSlice.name]: SidebarSlice.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (d) => d().concat(AuthApi.middleware),
});

setupListeners(store.dispatch);
