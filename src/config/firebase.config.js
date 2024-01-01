// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx4Zs5Z9zC_YOc8qlGOnwBiIi-7VV7XX8",
  authDomain: "study-notion-1.firebaseapp.com",
  projectId: "study-notion-1",
  storageBucket: "study-notion-1.appspot.com",
  messagingSenderId: "94503361927",
  appId: "1:94503361927:web:c8013419de68e2b1d3c722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =  getAuth(app);
export default auth;
