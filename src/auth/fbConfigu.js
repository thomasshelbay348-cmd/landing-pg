// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6SIxzQa7Wad6TaLPCWywp0yDs7TdMSN0",
    authDomain: "tecstem120.firebaseapp.com",
    projectId: "tecstem120",
    storageBucket: "tecstem120.firebasestorage.app",
    messagingSenderId: "667513122634",
    appId: "1:667513122634:web:a2abbdff718c1a9ba8dbb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)