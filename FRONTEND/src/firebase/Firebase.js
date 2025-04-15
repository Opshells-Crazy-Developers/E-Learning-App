// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFGxAgsXEF_pjxldV405UDdIF0Hl4oDWM",
  authDomain: "e-learning-app-a1e22.firebaseapp.com",
  projectId: "e-learning-app-a1e22",
  storageBucket: "e-learning-app-a1e22.firebasestorage.app",
  messagingSenderId: "907188822765",
  appId: "1:907188822765:web:611e6225386e83d05de2e4",
  measurementId: "G-YFC2JLLJY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth};