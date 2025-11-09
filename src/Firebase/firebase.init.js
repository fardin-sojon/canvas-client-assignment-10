// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0iIzOiip7IefyPxFBxgLcDQdS9H5dcOg",
  authDomain: "canvas-assignment-10.firebaseapp.com",
  projectId: "canvas-assignment-10",
  storageBucket: "canvas-assignment-10.firebasestorage.app",
  messagingSenderId: "167771718483",
  appId: "1:167771718483:web:1886832552ceadb82c97a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);