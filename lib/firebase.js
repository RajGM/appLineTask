import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyARzhVnEu9cun5F0nUiUdWW_q2UUqQNiA4",
    authDomain: "appline-25fc6.firebaseapp.com",
    projectId: "appline-25fc6",
    storageBucket: "appline-25fc6.appspot.com",
    messagingSenderId: "514033377017",
    appId: "1:514033377017:web:e6d2f713120afe1f0d4c28",
    measurementId: "G-ZV8D1X19KJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore exports
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;