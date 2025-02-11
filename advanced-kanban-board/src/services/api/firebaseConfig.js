// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrbR_fJXQ7y5Dl54gWOgmS-GlTtqcvrbU",
    authDomain: "boardly-85531.firebaseapp.com",
    projectId: "boardly-85531",
    storageBucket: "boardly-85531.firebasestorage.app",
    messagingSenderId: "88093746429",
    appId: "1:88093746429:web:d87c925625416933f18a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };