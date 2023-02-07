// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_YkmHGC9yZafwZ25S3nXCtQ62uPJZdXo",
  authDomain: "acetw-d1282.firebaseapp.com",
  projectId: "acetw-d1282",
  storageBucket: "acetw-d1282.appspot.com",
  messagingSenderId: "821206578394",
  appId: "1:821206578394:web:eccaa932c5482ee1d261e3",
  measurementId: "G-SQL06VBF0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();