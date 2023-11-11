// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5vWTHHupm5jN7Lq9GKnk_1u16hTKmE_Q",
    authDomain: "nsd-otp.firebaseapp.com",
    projectId: "nsd-otp",
    storageBucket: "nsd-otp.appspot.com",
    messagingSenderId: "851440921984",
    appId: "1:851440921984:web:79072cb264b475da146565",
    measurementId: "G-ZM6KT9MYRD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()