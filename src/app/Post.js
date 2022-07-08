import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formOpened: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setFormOpened: (state) => {
        state.formOpened = !state.formOpened
    }

  },
})

export default postSlice.reducer
export const { setFormOpened } = postSlice.actions