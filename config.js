import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCLiFtL_64nMDDmgD7aG_K1UgH-vrzrg18",
  authDomain: "votes-4d8e2.firebaseapp.com",
  databaseURL: "https://votes-4d8e2-default-rtdb.firebaseio.com",
  projectId: "votes-4d8e2",
  storageBucket: "votes-4d8e2.appspot.com",
  messagingSenderId: "3144545093",
  appId: "1:3144545093:web:3d013002da879b9aba042c",
  measurementId: "G-DZF6XW1FQP"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();