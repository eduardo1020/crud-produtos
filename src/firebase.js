import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDyRbj9rnDPCkSIEUN-Jaji76_2c-wtApo",
    authDomain: "crud-produtos-e7d1e.firebaseapp.com",
    projectId: "crud-produtos-e7d1e",
    storageBucket: "crud-produtos-e7d1e.appspot.com",
    messagingSenderId: "1038499386768",
    appId: "1:1038499386768:web:70c4b8c6ea435f2ee78f15"
};
  
let fireDb = firebase.initializeApp(firebaseConfig)

const storage = fireDb.storage()

export default fireDb.database().ref()

export { storage, firebase as defalt }