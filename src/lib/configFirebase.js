import { initializeApp } from "../lib/export.js";
import { getAuth } from "../lib/export.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUW_jAF3MVq5wgzQtoZNoXxREH2t6GhjQ",
    authDomain: "setealem-ae6b3.firebaseapp.com",
    projectId: "setealem-ae6b3",
    storageBucket: "setealem-ae6b3.appspot.com",
    messagingSenderId: "995422796547",
    appId: "1:995422796547:web:4e383650bf6c45f4a94736",
    measurementId: "G-FG3WD41STE"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = getFirestore(app);