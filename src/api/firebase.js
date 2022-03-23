// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVyjSDQ4I6o849f6rKq77ikykEtWu4UkM",
  authDomain: "stream-base-6c767.firebaseapp.com",
  projectId: "stream-base-6c767",
  storageBucket: "stream-base-6c767.appspot.com",
  messagingSenderId: "1006846305487",
  appId: "1:1006846305487:web:5e6a87517e9ac1f9a203ba",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig); 
export let auth = getAuth(firebase);
export default firebase;
