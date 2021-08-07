import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyAGZYaMpV1EFqXz7pKx-6akYYjtu85r_rU",
    authDomain: "react-app-753b5.firebaseapp.com",
    projectId: "react-app-753b5",
    storageBucket: "react-app-753b5.appspot.com",
    messagingSenderId: "120037473801",
    appId: "1:120037473801:web:6fdb4f74dceab5c7f282d8"

};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}