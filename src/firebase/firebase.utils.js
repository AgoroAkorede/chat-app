// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCgbCWEnQE-8qQIM0tplQz4uDGa9SFNuEs",
  authDomain: "chat-app-2111a.firebaseapp.com",
  projectId: "chat-app-2111a",
  storageBucket: "chat-app-2111a.appspot.com",
  messagingSenderId: "358293507059",
  appId: "1:358293507059:web:bd466b3398fdf80a1b2086",
  measurementId: "G-8NMLPF0981"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()


export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth) return;
    


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

export const auth = firebase.auth();
export default firebase;