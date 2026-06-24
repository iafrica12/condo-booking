import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your exact config object from the Firebase Console here:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase and Firestore Database
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);