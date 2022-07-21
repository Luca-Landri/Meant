import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const randomWord = createAsyncThunk('randomWord', async (arg, {rejectWithValue}) => {
  return fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(res => res.json())
    .then(data => {
      return data[0]
    }).catch (err => {
      rejectWithValue(err)
    })
})  

export const definition = createAsyncThunk("definition", async (arg, {getState}) => {
  const state = getState().app
  const word = state.words
  console.log(word)
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
  def: "",
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

    setWords: async (state, action) => {}

  },

  extraReducers: (builder) => {
    builder.addCase(randomWord.fulfilled, (state, action) => {
      console.log(action.payload)
      state.words = action.payload
    }),

    builder.addCase(definition.fulfilled, (state, action) => {
      console.log(action.payload)
      state.def = action.payload
    })
  }
})

export default appSlice.reducer
export const { setFormOpened, openDropdown, setWords } = appSlice.actions


// return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word[0]}?key=2bb1414e-0add-45aa-9ac2-4931332480e8`)
//         .then(res => {
//           return res.json()
//           .then(json => json[0])
//           .then(json => {

//           return json.shortdef[0]
//         })
//         }).catch(err => {
//           return rejectWithValue({error: err})
//         })
//     })