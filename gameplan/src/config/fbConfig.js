import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAmILE20DyQT2YvJ52E7Sx6ton7UEHqOo8",
  authDomain: "gameplan-65b0a.firebaseapp.com",
  databaseURL: "https://gameplan-65b0a.firebaseio.com",
  projectId: "gameplan-65b0a",
  storageBucket: "",
  messagingSenderId: "886082108158",
  appId: "1:886082108158:web:ebd33c3c788f2ddf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;