import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./Data"
import registerReducer from "./Register"
import appReducer from "./app"

export const store = configureStore({
  reducer: {
    data: dataReducer,
    register: registerReducer,
    app: appReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload"],
      },
  }),
})