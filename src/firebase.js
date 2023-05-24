// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpg19giAYVeAugb2gU2DRdanQ9IRseA88",
  authDomain: "hk-lite.firebaseapp.com",
  projectId: "hk-lite",
  storageBucket: "hk-lite.appspot.com",
  messagingSenderId: "699027761374",
  appId: "1:699027761374:web:3a2704e7523b8c9c377a4f",
  measurementId: "G-9GZZNLBSJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)