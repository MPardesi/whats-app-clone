// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyD3ZrkjagvORL5BW4XdEU3Htzb0Mpn5kRw",
  authDomain: "whatsappclone-411ec.firebaseapp.com",
  databaseURL: "https://whatsappclone-411ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsappclone-411ec",
  storageBucket: "whatsappclone-411ec.appspot.com",
  messagingSenderId: "597393242177",
  appId: "1:597393242177:web:e6382733c808efda916ec0",
  measurementId: "G-0TCCPST1MB"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = getFirestore(firebaseApp);
const db = firebaseApp.firestore();
const auth = auth();
  //const provider = new auth.GoogleAuthProvider();
  //const provider = new GoogleAuthProvider();


 // export { auth, provider };
  export default db;