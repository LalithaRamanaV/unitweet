// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "unitweet-224ed.firebaseapp.com",
  projectId: "unitweet-224ed",
  storageBucket: "unitweet-224ed.appspot.com",
  messagingSenderId: "621175508148",
  appId: "1:621175508148:web:7eacd361044622eda41be1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };