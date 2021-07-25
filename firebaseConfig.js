import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC52ZEIt5YdiM-wZTAbP9hZ2arjvz-ePgQ",
    authDomain: "devansh-f382a.firebaseapp.com",
    databaseURL: "https://devansh-f382a-default-rtdb.firebaseio.com",
    projectId: "devansh-f382a",
    storageBucket: "devansh-f382a.appspot.com",
    messagingSenderId: "691151398131",
    appId: "1:691151398131:web:fccc05de3be4ea68d38386"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();