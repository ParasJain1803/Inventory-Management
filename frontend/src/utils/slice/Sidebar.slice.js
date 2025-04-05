// import { createSlice } from "@reduxjs/toolkit";

// export const SidebarSlice = createSlice({
//   name: "SidebarSlice",
//   initialState: {
//     toggle: false,
//     collapsed: false,
//   },
//   reducers: {
//     toggleSidebar(state) {
//       state.toggle = !state.toggle;
//     },
//     collapsedSidebar(state) {
//       state.collapsed = !state.collapsed;
//     },
//   },
// });

// export const { toggleSidebar, collapsedSidebar } = SidebarSlice.actions;

// export const SidebarSlicePath = (state) => state.SidebarSlice;


// features/sidebar/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isCollapsed: true,
  },
  reducers: {
    expandSidebar: (state) => {
      state.isCollapsed = false;
    },
    collapseSidebar: (state) => {
      state.isCollapsed = true;
    },
  },
});

export const { expandSidebar, collapseSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
