// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";

import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBRdJwInq8_LSKvMN_qfOa1sSXHx7LhTp4",
  authDomain: "dt-prueba.firebaseapp.com",
  projectId: "dt-prueba",
  storageBucket: "dt-prueba.appspot.com",
  messagingSenderId: "186779022320",
  appId: "1:186779022320:web:6fef711a71e63084fee335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

