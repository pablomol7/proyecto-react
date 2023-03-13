import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEgKTJIXbBCh3cHC5BD1EQcIRkWhjux1g",
  authDomain: "proyecto-react-12293.firebaseapp.com",
  projectId: "proyecto-react-12293",
  storageBucket: "proyecto-react-12293.appspot.com",
  messagingSenderId: "195840458254",
  appId: "1:195840458254:web:7411b4e4a983f3072d065f",
  measurementId: "G-7BTLKFN4W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
