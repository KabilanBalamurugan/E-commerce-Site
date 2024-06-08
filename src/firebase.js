// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4yXIz3AureJmsKymAclngpiN91uO3xK8",
  authDomain: "ecom-fa067.firebaseapp.com",
  projectId: "ecom-fa067",
  storageBucket: "ecom-fa067.appspot.com",
  messagingSenderId: "120793485854",
  appId: "1:120793485854:web:5dc595a05bb2824883940f",
  measurementId: "G-RX2LLC9EB2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
