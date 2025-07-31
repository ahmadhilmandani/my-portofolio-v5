import { configureStore } from '@reduxjs/toolkit'
import openSidebarSlice from "./slice/toggleSidebar.ts"

export const store = configureStore({
  reducer: {
    openSidebarSlice: openSidebarSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch