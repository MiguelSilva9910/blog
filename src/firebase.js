 import * as firebase from 'firebase';
 // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD4lBfxF9c8IoRevxt8Q9XgqGzntk_37-8",
    authDomain: "reactblog-5e9a1.firebaseapp.com",
    databaseURL: "https://reactblog-5e9a1.firebaseio.com",
    projectId: "reactblog-5e9a1",
    storageBucket: "",
    messagingSenderId: "847038710065"
  };

  firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');