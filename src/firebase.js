// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuDBRyAbY7jVlW2UXIjZYQwwg5jJiAntc",
  authDomain: "react-food-web-914e9.firebaseapp.com",
  projectId: "react-food-web-914e9",
  storageBucket: "react-food-web-914e9.appspot.com",
  messagingSenderId: "119779775155",
  appId: "1:119779775155:web:a36b03f1a4b3ad598cd6c6",
  measurementId: "G-VSN4FS6PXQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
//console.log(auth);

export { app, auth };
