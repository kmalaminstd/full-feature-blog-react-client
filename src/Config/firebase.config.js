// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBXnm0uD2XG_jSGX9KB4wwJkf5fk47AII",
  authDomain: "testingauth-d0de9.firebaseapp.com",
  projectId: "testingauth-d0de9",
  storageBucket: "testingauth-d0de9.appspot.com",
  messagingSenderId: "1072018960926",
  appId: "1:1072018960926:web:c391e54913df296e77340f",
  measurementId: "G-2LVTSD7XXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)
export const postColRef = collection(db,'blog')