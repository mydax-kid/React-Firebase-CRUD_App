import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQo7mfNYJs9VX-Z5rbkGtJRW3d_9nwfAk",
  authDomain: "booklist-1812f.firebaseapp.com",
  projectId: "booklist-1812f",
  storageBucket: "booklist-1812f.appspot.com",
  messagingSenderId: "666538620772",
  appId: "1:666538620772:web:42f5f25e130bf925bf6c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)