import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  password: "",
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setEmail: (state, action) => {
        state.email = action.payload
    },

    setPassword: (state, action) => {
        state.password = action.payload
    },

  },
})

export default dataSlice.reducer
export const { setPassword, setEmail } = counterSlice.actions