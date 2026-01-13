// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the auth module
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5G1B0K9XS92OklwlWE1P2Fsmal8VBpvo",
    authDomain: "nurstatistics-88795.firebaseapp.com",
    projectId: "nurstatistics-88795",
    storageBucket: "nurstatistics-88795.firebasestorage.app",
    messagingSenderId: "800076536444",
    appId: "1:800076536444:web:7218cf4a4720b187fa07f9"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Firebase Auth
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export both db and auth
export { auth, db };
