import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCClPjKObJLDpmcK0GDctGaGxvRuDSLxhU",
    authDomain: "healthdataproject-65f66.firebaseapp.com",
    projectId: "healthdataproject-65f66",
    storageBucket: "healthdataproject-65f66.appspot.com",
    messagingSenderId: "736508068570",
    appId: "1:736508068570:web:33850a4f66ed064bbd9be3",
    measurementId: "G-YS3E2Z5K52"
  };

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
