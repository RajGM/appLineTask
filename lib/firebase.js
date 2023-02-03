import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBX5gkKsbOr1V0zxBuSqHWFct12dFOsQHA',
  authDomain: 'nextfire-demo.firebaseapp.com',
  projectId: 'nextfire-demo',
  storageBucket: 'nextfire-demo.appspot.com',
  messagingSenderId: '827402452263',
  appId: '1:827402452263:web:c9a4bea701665ddf15fd02',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore exports
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
