// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

     apiKey: "AIzaSyAWKs7DSBbLe47o5AyNbs49Pi7n-hSuBhE",
     authDomain: "gamenight-2268c.firebaseapp.com",
     projectId: "gamenight-2268c",
     storageBucket: "gamenight-2268c.appspot.com",
     messagingSenderId: "123241662946",
     appId: "1:123241662946:web:41023b8a5884b72b3e51bb"

};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;