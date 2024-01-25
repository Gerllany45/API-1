// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * firestore from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7LRqOsbCBXKveeXqhyluAGtksQvuFg_c",
  authDomain: "teste-67293.firebaseapp.com",
  projectId: "teste-67293",
  storageBucket: "teste-67293.appspot.com",
  messagingSenderId: "61681503262",
  appId: "1:61681503262:web:dfa740b25af438a06f320f",
  measurementId: "G-80W12EGZJ9"
};

// Initialize Firebase
console.log('Conectado ao FireBase')
const Firebase = initializeApp(firebaseConfig);
export const db=firestore.getFirestore(Firebase)

export {firestore}