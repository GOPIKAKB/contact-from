import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyAZwJ-SV2MsftGaGFOf_-bVH43LKf_dJu4",
    authDomain: "login-d4030.firebaseapp.com",
    projectId: "login-d4030",
    storageBucket: "login-d4030.appspot.com",
    messagingSenderId: "562134431611",
    appId: "1:562134431611:web:73b1b60a320b666f41efde",
    measurementId: "G-C9HBEEKT08"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth();

export { app, auth }