import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBTkfo7bB6osiU_sv3a0QR_r37WiurWL6g",
    authDomain: "e-ride-efdde.firebaseapp.com",
    projectId: "e-ride-efdde",
    storageBucket: "e-ride-efdde.appspot.com",
    messagingSenderId: "954894028531",
    appId: "1:954894028531:web:b916b3de7b73e9f170f186"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
