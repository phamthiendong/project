import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdKtY_1Il2N4hcUhDLOJzEj3M_3i3fYGU",
  authDomain: "learn-firebase-2c6b9.firebaseapp.com",
  projectId: "learn-firebase-2c6b9",
  storageBucket: "learn-firebase-2c6b9.firebasestorage.app",
  messagingSenderId: "211604257787",
  appId: "1:211604257787:web:aea9990ebed945b113e95e",
};
initializeApp(firebaseConfig);
// Init services

const db = getFireStore();
