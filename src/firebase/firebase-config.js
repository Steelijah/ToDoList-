// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2Bb7mQ8SGDYFLkO51U0TjBfPCDqmHSt0",
    authDomain: "todo-masa-2022-a3e29.firebaseapp.com",
    projectId: "todo-masa-2022-a3e29",
    storageBucket: "todo-masa-2022-a3e29.appspot.com",
    messagingSenderId: "379700303017",
    appId: "1:379700303017:web:1537b8b960518d10f205b8",
    measurementId: "G-3X9VRZ9BXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()