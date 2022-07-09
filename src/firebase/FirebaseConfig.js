import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "landrigram.firebaseapp.com",
  projectId: "landrigram",
  storageBucket: "landrigram.appspot.com",
  messagingSenderId: "1011335996647",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-XCPBGY4VZD"
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);