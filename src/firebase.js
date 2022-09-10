// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjgMLcefhLty2K-Qcyt-0s1smEQy9Gmqs",
  authDomain: "library-db55a.firebaseapp.com",
  projectId: "library-db55a",
  storageBucket: "library-db55a.appspot.com",
  messagingSenderId: "556274029883",
  appId: "1:556274029883:web:a0aa80434b5d43e81f131e",
  measurementId: "G-N3QZP11LHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
