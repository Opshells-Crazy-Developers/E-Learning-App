import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase"; // Firebase config
import { onAuthStateChanged, signOut } from "firebase/auth"; // Add signOut

// Create and export the AuthContext
export const AuthContext = React.createContext(); 

export function useAuth() {
  return useContext(AuthContext); // Custom hook to access the context
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  const initializeUser = async (user) => {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };

  const logout = async () => {
    try {
      await signOut(auth); // Signs the user out from Firebase
      setCurrentUser(null);
      setUserLoggedIn(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value = {
    currentUser,
    userLoggedIn,
    logout, // Expose logout method
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Wait for loading state to resolve */}
    </AuthContext.Provider>
  );
}
