import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "./export.js";

import { auth } from "./configFirebase.js";

const provider = new GoogleAuthProvider();

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function registerNewUser(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export function logout() {
    return signOut(auth);
}