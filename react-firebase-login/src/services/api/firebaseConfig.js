// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsFc8KcHIeSbfeAfOLQNJQ6UQrKXt_r-M",
    authDomain: "react-firebase-auth-syst-96426.firebaseapp.com",
    projectId: "react-firebase-auth-syst-96426",
    storageBucket: "react-firebase-auth-syst-96426.firebasestorage.app",
    messagingSenderId: "775163370229",
    appId: "1:775163370229:web:47633c94d0ddde2c20c3bc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };