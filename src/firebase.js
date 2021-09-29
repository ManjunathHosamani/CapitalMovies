import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCVTNi15V5Oh_yFVVx_GSg1P7PBBoEK3LE",
    authDomain: "capitalmovies-app.firebaseapp.com",
    projectId: "capitalmovies-app",
    storageBucket: "capitalmovies-app.appspot.com",
    messagingSenderId: "250508507524",
    appId: "1:250508507524:web:f68b13e9f7d6d67f0d45d1",
    measurementId: "G-CX6NXVG095",
  })
  .auth();
