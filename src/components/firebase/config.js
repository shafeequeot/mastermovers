// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoOCkxXDuCQavWF9am3S5X1cTEf_G-58I",
  authDomain: "master-movers-c520f.firebaseapp.com",
  projectId: "master-movers-c520f",
  storageBucket: "master-movers-c520f.appspot.com",
  messagingSenderId: "285550825176",
  appId: "1:285550825176:web:e070d7a2e0e2b2e56511ad"
};

// Initialize Firebase
const Fireapp = initializeApp(firebaseConfig);

export default Fireapp