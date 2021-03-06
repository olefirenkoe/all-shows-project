import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCM0Bv5iwphXJJFFoFwwDQRUVeRKf9Yi-Q",
    authDomain: "netflixx-ab800.firebaseapp.com",
    projectId: "netflixx-ab800",
    storageBucket: "netflixx-ab800.appspot.com",
    messagingSenderId: "905989241468",
    appId: process.env.REACT_APP_FIREBASE_CONFIG,
    measurementId: "G-QD38FLKBPX"
});

export const Context = createContext(null);


const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,

    document.getElementById('root')
);

