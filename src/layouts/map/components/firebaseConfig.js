// firebaseConfig.js
// This file configs the FirebaseDB for all instances
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdY267qCAOhbpJXoJBjAJqK6u5_8Eqe7E",
    authDomain: "fishjournal-b3009.firebaseapp.com",
    projectId: "fishjournal-b3009",
    storageBucket: "fishjournal-b3009.appspot.com",
    messagingSenderId: "691473569516",
    appId: "1:691473569516:web:b0fe0f0053810f332377c9",
    measurementId: "G-EJ3ECQ5F9E",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const database = getDatabase(app);

export { database };
