import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPuvXOTPf_o4DSiKOWCOgUDBagfh3QG4U",
  authDomain: "intellimeet-270c2.firebaseapp.com",
  projectId: "intellimeet-270c2",
  storageBucket: "intellimeet-270c2.firebasestorage.app",
  messagingSenderId: "997166628962",
  appId: "1:997166628962:web:8d4cf223912050cdf3113b",
  measurementId: "G-S09GHNZB6L",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
