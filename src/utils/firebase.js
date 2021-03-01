import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAIaVNyHJGV-vngdDs8r2BAxnsWE2CTswc",
    authDomain: "my-chat-9290d.firebaseapp.com",
    projectId: "my-chat-9290d",
    storageBucket: "my-chat-9290d.appspot.com",
    messagingSenderId: "159023475897",
    appId: "1:159023475897:web:b215b7d2a44c5a45d13f68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database();
  export const auth = firebase.auth;