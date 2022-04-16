import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBxRJylUbAU3lG5Vvm0udlx3Fik_-wa1Vo",
    authDomain: "rent-a-ride-898b1.firebaseapp.com",
    projectId: "rent-a-ride-898b1",
    storageBucket: "rent-a-ride-898b1.appspot.com",
    messagingSenderId: "701148197052",
    appId: "1:701148197052:web:352566b7b488340fd9e0b9"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
