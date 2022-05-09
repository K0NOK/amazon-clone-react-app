// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBiRlYE64_ISIxQDZ6m5LSTG9g6c2WUqvE",
    authDomain: "clone-53329.firebaseapp.com",
    projectId: "clone-53329",
    storageBucket: "clone-53329.appspot.com",
    messagingSenderId: "471124455125",
    appId: "1:471124455125:web:fd787b91ee13f608cabc5c",
    measurementId: "G-4N9KLFJ6C6"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};