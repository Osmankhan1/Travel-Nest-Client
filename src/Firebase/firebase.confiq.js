// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLpG9VOAObpNsN8_BVJNvyTugf0yxxcss",
  authDomain: "travel-nest-c3f3f.firebaseapp.com",
  projectId: "travel-nest-c3f3f",
  storageBucket: "travel-nest-c3f3f.appspot.com",
  messagingSenderId: "792352266036",
  appId: "1:792352266036:web:b5a5772605c6613098b761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;