import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATp3D_mrrThCApSCneLucwl9jWIOyC0jk",
    authDomain: "lmsproject-433ed.firebaseapp.com",
    projectId: "lmsproject-433ed",
    storageBucket: "lmsproject-433ed.appspot.com",
    messagingSenderId: "981868989331",
    appId: "1:981868989331:web:10edda74968f109e7ab666",
    measurementId: "G-890YV85J81"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
