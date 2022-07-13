import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formOpened: false,
  dropdownOpened: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFormOpened: (state) => {
        state.formOpened = !state.formOpened
    },

    openDropdown: (state) => {
      state.dropdownOpened = !state.dropdownOpened
    }

  },
})

export default appSlice.reducer
export const { setFormOpened } = appSlice.actions