import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;