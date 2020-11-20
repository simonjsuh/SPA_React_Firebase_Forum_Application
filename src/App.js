import React, { useEffect } from 'react';
import './App.css';

// firebase, firebaseUI, css for firebaseUI
import '../node_modules/firebaseui/dist/firebaseui.css';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyDWWSz5Et1sJz479DhGc32T4JStzfKbAN8",
  authDomain: "spa-forum-app.firebaseapp.com",
  databaseURL: "https://spa-forum-app.firebaseio.com",
  projectId: "spa-forum-app",
  storageBucket: "spa-forum-app.appspot.com",
  messagingSenderId: "3905625505",
  appId: "1:3905625505:web:5e3e26c84d2677e4bf7fe0",
  measurementId: "G-93EX5BMJS1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

function App() {
  useEffect(() => {
    firebaseUI.start('#firebaseui-auth-container', {
      signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Other config options...
      callbacks: {
        signInSuccess: () => {
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // // console.log(user.photoURL);
              // // update Redux store with new username
              // store.dispatch( updateUser({ 
              //   loggedInUserUsername: user.displayName, 
              //   userProfilePhotoURL: user.photoURL
              // }) );
              console.log(user.displayName);
            } else {
              // No user is signed in.
            }
          });
        }
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>SPA Forum App</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
}

export default App;
