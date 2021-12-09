// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF8m9HOLikiKU7neysgRmAQh7tnq7dNvM",
  authDomain: "archlinuxgui-34caa.firebaseapp.com",
  projectId: "archlinuxgui-34caa",
  storageBucket: "archlinuxgui-34caa.appspot.com",
  messagingSenderId: "10613452107",
  appId: "1:10613452107:web:95f5bab9e3273c29e2ccce",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
