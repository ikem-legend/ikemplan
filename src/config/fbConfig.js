import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDlBFgEuBrmcll3utCCo57QPM81INaViSQ",
  authDomain: "net-ninja-ikemplan.firebaseapp.com",
  databaseURL: "https://net-ninja-ikemplan.firebaseio.com",
  projectId: "net-ninja-ikemplan",
  storageBucket: "net-ninja-ikemplan.appspot.com",
  messagingSenderId: "94804091342"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;