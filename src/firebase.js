// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa9PW1HDetcGy-LJGJBEJaqj6DOEijLGw",
  authDomain: "todo-1326c.firebaseapp.com",
  projectId: "todo-1326c",
  storageBucket: "todo-1326c.appspot.com",
  messagingSenderId: "387189851265",
  appId: "1:387189851265:web:273769fdd21072a326b980",
  measurementId: "G-E7FCP819WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};
