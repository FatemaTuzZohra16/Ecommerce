// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUS-VsFkUQTOaC0NG19-uBSngIIZg_lj0",
  authDomain: "ecommerce-4656e.firebaseapp.com",
  projectId: "ecommerce-4656e",
  storageBucket: "ecommerce-4656e.firebasestorage.app",
  messagingSenderId: "758845878425",
  appId: "1:758845878425:web:27cb5b38918c96ffc74808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig