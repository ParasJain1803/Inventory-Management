
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
