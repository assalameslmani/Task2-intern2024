import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATp3D_mrrThCApSCneLucwl9jWIOyC0jk",
  authDomain: "lmsproject-433ed.firebaseapp.com",
  projectId: "lmsproject-433ed",
  storageBucket: "lmsproject-433ed.appspot.com",
  messagingSenderId: "981868989331",
  appId: "1:981868989331:web:10edda74968f109e7ab666",
  measurementId: "G-890YV85J81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
