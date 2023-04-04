import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getFirestore, collection, getDocs } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_m2_vy-2AwbIVIz6LvCwXduPRv0pyiH4",
  authDomain: "tipscc23.firebaseapp.com",
  projectId: "tipscc23",
  storageBucket: "tipscc23.appspot.com",
  messagingSenderId: "404305944835",
  appId: "1:404305944835:web:e1a87f3571d6048094c936",
  measurementId: "G-TJEWCR515V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
  db
}