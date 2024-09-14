
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCFL6wEkojPogfUeTnV7tO8sOHm2YVRN0M",
  authDomain: "freelance-ffb69.firebaseapp.com",
  projectId: "freelance-ffb69",
  storageBucket: "freelance-ffb69.appspot.com",
  messagingSenderId: "7882012228",
  appId: "1:7882012228:web:bd9b87fbccbc0ec6f2ae11",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

const signInWithGoogle = () => signInWithPopup(auth, provider);
const signOutFromGoogle = () => signOut(auth);

export { auth, db, signInWithGoogle, signOutFromGoogle ,provider,storage};