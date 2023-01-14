import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "expense-tracker-182b7.firebaseapp.com",
  projectId: "expense-tracker-182b7",
  storageBucket: "expense-tracker-182b7.appspot.com",
  messagingSenderId: "481429460337",
  appId: "1:481429460337:web:2f9fd030bd1b37b265d2d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
