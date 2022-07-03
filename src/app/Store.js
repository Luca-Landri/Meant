import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./Data"

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})