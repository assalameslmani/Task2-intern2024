// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
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

// Initialize Firebase Analytics (if you plan to use it)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
