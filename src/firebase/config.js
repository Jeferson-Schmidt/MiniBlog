
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArOa__J-Z7lMQT-8MoPGhA9-1XhPWx4CE",
  authDomain: "miniblog-9be02.firebaseapp.com",
  projectId: "miniblog-9be02",
  storageBucket: "miniblog-9be02.appspot.com",
  messagingSenderId: "361867123772",
  appId: "1:361867123772:web:b2d621e01c3e074f137739"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db, app };