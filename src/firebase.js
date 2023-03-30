// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnFS5HNuUT0vZvKz9E1HhW9kzeUKUQKII",
  authDomain: "react-netflix-clone-ad653.firebaseapp.com",
  projectId: "react-netflix-clone-ad653",
  storageBucket: "react-netflix-clone-ad653.appspot.com",
  messagingSenderId: "877199985132",
  appId: "1:877199985132:web:f758d12904058bbca5d8c9",
  measurementId: "G-PKVPR09RVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);