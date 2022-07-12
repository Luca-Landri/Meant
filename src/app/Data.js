import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userDefault from '../../assets/user.jpg'
import { provider } from '../firebase/FirebaseConfig'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  img: userDefault,
  isAuth: false,
}

export const signInGoogle = createAsyncThunk('signInGoogle', async () => {
    return signInWithPopup(getAuth(), provider).then(res => {
      return res.user
    }).catch (err => {
      toast.error(err.message)
    })
})

export const NormalSingIn = createAsyncThunk('NormalSingIn', async (email, password) => {
    return signInWithEmailAndPassword(getAuth(), email, password).then(res => {
      return res.user
    }).catch (err => {
      toast.error(err.message)
    })
})

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(signInGoogle.fulfilled, (state, action) => {
        state.name = action.payload.displayName
        state.img = action.payload.photoURL
        state.isAuth = true
        state.email = action.payload.email
        console.log(state.email)
        console.log(state.isAuth)
    }),
    builder.addCase(signInGoogle.rejected, (state, action) => {
        toast.error("Login failed, try a different account")
        state.isAuth = false
    }),

    builder.addCase(NormalSingIn.fulfilled, (state, action) => {
        state.isAuth = true
        state.email = action.payload.email
        console.log(state.email)
        console.log(state.isAuth)
        state.password = action.payload.password
    }),

    builder.addCase(NormalSingIn.rejected, (state, action) => {
        toast.error("Login failed, try a different account")
        state.isAuth = false
    })
  } // end of extraReducers
})

export default dataSlice.reducer