import { createSlice }  from "@reduxjs/toolkit";

const openSidebarSlice = createSlice({
  name: 'openSidebar',
  initialState: { isOpen: false },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})


export const { toggleSidebar } = openSidebarSlice.actions
export default openSidebarSlice.reducer