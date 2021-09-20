import "firebase/firestore"

import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyD9G1LWDTCLrg-WGRhnRTewFwa-V8Lyl3Y",
  authDomain: "radtek-eac5a.firebaseapp.com",
  projectId: "radtek-eac5a",
  storageBucket: "radtek-eac5a.appspot.com",
  messagingSenderId: "104737010996",
  appId: "1:104737010996:web:ba19739e10253acfb72161"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore= firebase.firestore(app)