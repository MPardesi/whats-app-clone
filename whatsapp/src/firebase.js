// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbx1dI-l67_w0-w9i0oDFew3NsUdy3tkY",
    authDomain: "whatsappclone-2d6b3.firebaseapp.com",
    projectId: "whatsappclone-2d6b3",
    storageBucket: "whatsappclone-2d6b3.appspot.com",
    messagingSenderId: "720115674704",
    appId: "1:720115674704:web:7a6454a315b74c230d6b55",
    measurementId: "G-N7WBQ9ZSX4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  