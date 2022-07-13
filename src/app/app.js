import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formOpened: false,
  dropdown: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFormOpened: (state) => {
        state.formOpened = !state.formOpened
    },

    openDropdown: (state) => {
      state.dropdown = !state.dropdown
    }

  },
})

export default appSlice.reducer
export const { setFormOpened, openDropdown } = appSlice.actions