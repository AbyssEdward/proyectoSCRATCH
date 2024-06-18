// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPWKjOesFwbt-9MKmimv4Ok_8IBqTNG2s",
  authDomain: "notaslogin.firebaseapp.com",
  projectId: "notaslogin",
  storageBucket: "notaslogin.appspot.com",
  messagingSenderId: "1007321848339",
  appId: "1:1007321848339:web:41ba5ec6867e1efb9efde6"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;