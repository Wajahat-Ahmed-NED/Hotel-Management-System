// Import the functions you need from the SDKs you need

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
    getDatabase,
    set,
    get,
    push,
    remove,
    ref,
    onValue,
    onChildAdded,
    child,
} from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk9YThr_eYU4opwuwNq0dM81Yrk-SoprA",
    authDomain: "fb-auth-d1867.firebaseapp.com",
    projectId: "fb-auth-d1867",
    storageBucket: "fb-auth-d1867.appspot.com",
    messagingSenderId: "428939442556",
    appId: "1:428939442556:web:068422e07fa0e188180cf9",
    measurementId: "G-0294XZ0452"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)
export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    set,
    push,
    remove,
    ref,
    onValue,
    onChildAdded,
    child,
    get,
    provider,
};