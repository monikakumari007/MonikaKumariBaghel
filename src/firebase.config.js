// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt8_5Pu1rZZtx_nqTvjLyZuwMtx-eLeXA",
  authDomain: "online-job-portal-1fd02.firebaseapp.com",
  projectId: "online-job-portal-1fd02",
  storageBucket: "online-job-portal-1fd02.appspot.com",
  messagingSenderId: "1092069115730",
  appId: "1:1092069115730:web:779a7f7bfaa97585355c8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};

