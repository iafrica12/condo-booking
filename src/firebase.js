import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your exact config object from the Firebase Console here:
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC72LHC_WJZBAPMYBVhhZUdKwZguouchzE",
  authDomain: "condo-booking.firebaseapp.com",
  projectId: "condo-booking",
  storageBucket: "condo-booking.firebasestorage.app",
  messagingSenderId: "656468579243",
  appId: "1:656468579243:web:5a512c01532d752b7c78ee",
  measurementId: "G-VKS2WK4CSQ"
};
// Initialize Firebase and Firestore Database
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);