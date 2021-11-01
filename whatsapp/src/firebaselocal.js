// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,onSnapshot, orderBy,query } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage=getStorage();