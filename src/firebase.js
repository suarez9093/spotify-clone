// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyASVDr8K6uPTC9Be2mKI4xs3v99KSolg8g',
  authDomain: 'spotify-clone-db871.firebaseapp.com',
  projectId: 'spotify-clone-db871',
  storageBucket: 'spotify-clone-db871.appspot.com',
  messagingSenderId: '96711183665',
  appId: '1:96711183665:web:028ef0a04a24fbbb1e3410',
  measurementId: 'G-G4MWGBMEK4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
