export {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged,
    updateProfile,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"; 
  
  export {
    getFirestore,
    collection,
    addDoc,
    doc,
    updateDoc,
    query,
    getDocs,
    orderBy,
    getDoc,
    arrayUnion,
    arrayRemove,
    deleteDoc,
    where,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"; 
  
  export {
    initializeApp,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"; 