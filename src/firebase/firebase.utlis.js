import { initializeApp } from "firebase/app";
//import the required services that will return getters
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIDfQYXCovyK1RHkxF4A0M1HK-QLWi96o",
  authDomain: "react-ecommerce-project-23e8f.firebaseapp.com",
  projectId: "react-ecommerce-project-23e8f",
  storageBucket: "react-ecommerce-project-23e8f.appspot.com",
  messagingSenderId: "296631926446",
  appId: "1:296631926446:web:669a64d104ba3f6e1ab73f",
  measurementId: "G-VY45MYR199",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);



