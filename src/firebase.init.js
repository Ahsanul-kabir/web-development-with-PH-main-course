// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyCxddCwwzyy7Z2pEFHqZRVaxD1HhQ_MAa8",
//     authDomain: "doctors-portal-90aec.firebaseapp.com",
//     projectId: "doctors-portal-90aec",
//     storageBucket: "doctors-portal-90aec.appspot.com",
//     messagingSenderId: "346902619414",
//     appId: "1:346902619414:web:3ed44571667706e92fdc37"
//   };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;