import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

import { auth } from "./configFirebase.js";

const provider = new GoogleAuthProvider();

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function registerNewUser(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(() => updateProfile(auth.currentUser, { displayName: name }));
}

export function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export function logout() {
    return signOut(auth);
}