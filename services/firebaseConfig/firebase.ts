// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEz54bkrTyK3BF3g6nU_3yw3MIiXSA2O8",
  authDomain: "otimizaai-e81bd.firebaseapp.com",
  projectId: "otimizaai-e81bd",
  storageBucket: "otimizaai-e81bd.firebasestorage.app",
  messagingSenderId: "304614406721",
  appId: "1:304614406721:web:e77a91d91e68c4eef424c0",
  measurementId: "G-X90H914SDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);