// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3fe1e.firebaseapp.com",
  projectId: "mern-blog-3fe1e",
  storageBucket: "mern-blog-3fe1e.appspot.com",
  messagingSenderId: "433819981493",
  appId: "1:433819981493:web:eb2ac909b9bcd1970450fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);