import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyD_i8O-6yc-HO3gyxw4tMTRykivo5BB7NQ",
  authDomain: "conviodelivery.firebaseapp.com",
  databaseURL: "https://conviodelivery.firebaseio.com",
  projectId: "conviodelivery",
  storageBucket: "conviodelivery.appspot.com",
  messagingSenderId: "232689547068",
  appId: "1:232689547068:web:7c5943929e087189eed039",
  measurementId: "G-SWHH7HG8EV"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()