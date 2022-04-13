import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2qS5c7LKoU_aK9nZdjlaa0gPoASOi4pk",
    authDomain: "genius-car-services-27053.firebaseapp.com",
    projectId: "genius-car-services-27053",
    storageBucket: "genius-car-services-27053.appspot.com",
    messagingSenderId: "81652772376",
    appId: "1:81652772376:web:131d484b8e6a6859769d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;