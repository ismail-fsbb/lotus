// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUzfU37jnK7ZJgqgjLwoy-a2LhA6ujRxE",
  authDomain: "lotus-a236b.firebaseapp.com",
  projectId: "lotus-a236b",
  storageBucket: "lotus-a236b.firebasestorage.app",
  messagingSenderId: "108156468674",
  appId: "1:108156468674:web:798e6858c88e703398ea5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
