// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlMHbDO2ccCfCdNWqiFexz-GLLtWhYd9Y",
    authDomain: "affinity-79d3a.firebaseapp.com",
    projectId: "affinity-79d3a",
    storageBucket: "affinity-79d3a.appspot.com",
    messagingSenderId: "1072131570264",
    appId: "1:1072131570264:web:bc65e2374a9ad4c4a6a82d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;