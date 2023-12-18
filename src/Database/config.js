import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBsBPTMMpB3jIHScC-ClcgINJHUht9pc64",
    authDomain: "scalestechnologywebapp.firebaseapp.com",
    projectId: "scalestechnologywebapp",
    storageBucket: "scalestechnologywebapp.appspot.com",
    messagingSenderId: "80912762210",
    appId: "1:80912762210:web:123fd81bda9c06f515183b",
    measurementId: "G-R6P1V192TJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const storage = firebase.storage();
