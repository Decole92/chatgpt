import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDyAq0jw149Ml_p4KtqKCjnz6riwFqwGHg",
    authDomain: "chatgpt-messenger-87d8a.firebaseapp.com",
    projectId: "chatgpt-messenger-87d8a",
    storageBucket: "chatgpt-messenger-87d8a.appspot.com",
    messagingSenderId: "553086935401",
    appId: "1:553086935401:web:9c577cde31a24f6ac69df8",
    measurementId: "G-E604LP3D01"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {db}