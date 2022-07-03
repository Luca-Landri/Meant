import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCEzrYPHyPBMhDofZ_26M36lzE66hQ3FBI",
  authDomain: "landrigram.firebaseapp.com",
  projectId: "landrigram",
  storageBucket: "landrigram.appspot.com",
  messagingSenderId: "1011335996647",
  appId: "1:1011335996647:web:8cf6ca38665dc205f16e42",
  measurementId: "G-XCPBGY4VZD"
};

export const app = initializeApp(firebaseConfig);