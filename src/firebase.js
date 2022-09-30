// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCSJNttMgIbZt0TY4Lp7cHdJaJ30vCEf0",
    authDomain: "realtor-clone-43134.firebaseapp.com",
    projectId: "realtor-clone-43134",
    storageBucket: "realtor-clone-43134.appspot.com",
    messagingSenderId: "574171598645",
    appId: "1:574171598645:web:e776d6c95d0e59e44c467c",
    measurementId: "G-6P64H5B76K"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
