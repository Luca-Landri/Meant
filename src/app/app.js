import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const randomWord = createAsyncThunk('randomWord', async (arg, {rejectWithValue}) => {
  return fetch('https://random-word-api.herokuapp.com/word?number=5')
    .then(res => res.json())
    .then(data => {
      return data
    }).catch (err => {
      rejectWithValue(err)
    })
})  

export const definition = createAsyncThunk("definition", async (word, {getState}) => {
   return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=2bb1414e-0add-45aa-9ac2-4931332480e8`)
    .then(res => {
      return res.json()
    }).catch (err => {
      console.log(err)
    })
})

const initialState = {
  formOpened: false,
  dropdown: false,
  words: [],
  def: [],
  loading: "idle",
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
    },
  },

  extraReducers: (builder) => {
    builder.addCase(randomWord.fulfilled, (state, action) => {
       state.words = action.payload
    }),

    builder.addCase(definition.fulfilled, (state, action) => {
      if (state.loading == "idle") {
        state.def.push(action.payload)
        if(state.def.length == 5){
          state.loading = "complete"
        }
      }
      
    })
  }
})

export default appSlice.reducer
export const { setFormOpened, openDropdown, setWords } = appSlice.actions