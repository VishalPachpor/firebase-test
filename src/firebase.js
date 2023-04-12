// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1vzYKgRNIjSgLqQ5wH-YcvZAh05Sm_7s",
    authDomain: "panda-a3c11.firebaseapp.com",
    projectId: "panda-a3c11",
    storageBucket: "panda-a3c11.appspot.com",
    messagingSenderId: "1019548184778",
    appId: "1:1019548184778:web:34482cd8f351f79ddbc433",
    measurementId: "G-D3CXSE5W8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app);