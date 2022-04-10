import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpB2b73z52NEXUrSoz-_EOF5YlRrFG_Xs",
    authDomain: "ema-john-simple-f8498.firebaseapp.com",
    projectId: "ema-john-simple-f8498",
    storageBucket: "ema-john-simple-f8498.appspot.com",
    messagingSenderId: "298179944382",
    appId: "1:298179944382:web:35f90201b6206d89efe3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;