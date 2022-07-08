import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    password: "",
    password2: "",
}

export const registerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setEmail: (state, action) => {
        state.email = action.payload
    },

    setPassword: (state, action) => {
        state.password = action.payload
    },

    setPassword2: (state, action) => {
        state.password2 = action.payload
    }
  },
})

export const { setEmail, setPassword, setPassword2 } = registerSlice.actions

export default registerSlice.reducer