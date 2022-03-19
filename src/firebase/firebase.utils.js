
import firebase from 'firebase/compat/app';
// import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {  getRedirectResult} from "firebase/auth";
import { useRef } from 'react';

const provider = new GoogleAuthProvider();

const config = {
  apiKey: "AIzaSyCgbCWEnQE-8qQIM0tplQz4uDGa9SFNuEs",
  authDomain: "chat-app-2111a.firebaseapp.com",
  projectId: "chat-app-2111a",
  storageBucket: "chat-app-2111a.appspot.com",
  messagingSenderId: "358293507059",
  appId: "1:358293507059:web:bd466b3398fdf80a1b2086",
  measurementId: "G-8NMLPF0981"
};

// Initialize Firebase
firebase.initializeApp(config);
export const firestore = firebase.firestore()

// Google signin option

provider.setCustomParameters({prompt:'select_account'})

export const auth = getAuth();
export const signInWithGoogle=()=>
{signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });


export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if (!userAuth) return;
  
  const userRef = firestore.doc(`user/${userAuth.uid}`)
  
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef
}

//Get currentUser
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}

// export const auth = firebase.auth();
export default firebase;