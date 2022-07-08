import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./Data"
import registerReducer from "./Register"
import postReducer from "./Post"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    register: registerReducer,
    post: postReducer,
  },
})