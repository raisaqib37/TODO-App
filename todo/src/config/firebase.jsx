// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwkPLn8vEL_LTzm0AikHZHmdWJvHKuIF8",
  authDomain: "todo-app-d08fc.firebaseapp.com",
  projectId: "todo-app-d08fc",
  storageBucket: "todo-app-d08fc.appspot.com",
  messagingSenderId: "328286504988",
  appId: "1:328286504988:web:293786586bb4cc4c4df7d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);