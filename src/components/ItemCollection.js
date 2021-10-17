import "firebase/firestore"

import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCL2eLHXyuRcNO91rQBy69AKoljnujVXnI",
  authDomain: "ecomerce-3809c.firebaseapp.com",
  projectId: "ecomerce-3809c",
  storageBucket: "ecomerce-3809c.appspot.com",
  messagingSenderId: "613883322160",
  appId: "1:613883322160:web:727670a6cca3b09d42f2f5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore= firebase.firestore(app)