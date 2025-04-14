import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    updatePassword,
    sendEmailVerification,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { auth } from "./Firebase";

// Create user with email and password
const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Sign in with email and password
const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Sign in with Google
const doSignInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Sign out user
const doSignOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Password reset
const doPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Password change
const doPasswordChange = async (password) => {
    try {
        if (!auth.currentUser) throw new Error("No user logged in");
        await updatePassword(auth.currentUser, password);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Send email verification
const doSendEmailVerification = async () => {
    try {
        if (!auth.currentUser) throw new Error("No user logged in");
        await sendEmailVerification(auth.currentUser, {
            url: `${process.env.REACT_APP_REDIRECT_URL || window.location.origin}/home`,
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Auth state change listener
const authStateListener = (callback) => {
    return onAuthStateChanged(auth, (user) => {
        callback(user);
    });
};

// Export all functions as an object
const firebaseAuthService = {
    doCreateUserWithEmailAndPassword,
    doSignInWithEmailAndPassword,
    doSignInWithGoogle,
    doSignOut,
    doPasswordReset,
    doPasswordChange,
    doSendEmailVerification,
    authStateListener
};

export default firebaseAuthService;
