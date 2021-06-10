import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnV9iazGyQgvGklo4pMC2P3t0k4V4wIq4",
    authDomain: "crwn-db-6d298.firebaseapp.com",
    projectId: "crwn-db-6d298",
    storageBucket: "crwn-db-6d298.appspot.com",
    messagingSenderId: "31654205598",
    appId: "1:31654205598:web:63d1a6291d2c4ecd25438f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;