import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./Data"
import registerReducer from "./Register"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    register: registerReducer,
  },
})