import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCZ_ynzcVnIrNymT_EoCCXf2oy2O6P4AvA",
  authDomain: "olx-clonee-a855d.firebaseapp.com",
  projectId: "olx-clonee-a855d",
  storageBucket: "olx-clonee-a855d.appspot.com",
  messagingSenderId: "767340040920",
  appId: "1:767340040920:web:94bd069cae46a0cea17dad",
  measurementId: "G-ZMB6Q9LESN"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export