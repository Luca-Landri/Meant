import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  email: "",
  password: "",
  img: "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },

    setEmail: (state, action) => {
        state.email = action.payload
    },

    setPassword: (state, action) => {
        state.password = action.payload
    },

    setImg: (state, action) => {
      state.img = action.payload
    }

  },
})

export default dataSlice.reducer
export const { setPassword, setEmail, setImg, setName } = dataSlice.actions