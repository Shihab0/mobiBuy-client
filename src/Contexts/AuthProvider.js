import React, { createContext, useEffect, useState } from "react";
import app from "../Pages/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadedUser, setLoadedUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const updateUser = (userProfile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userProfile);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedUser(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    login,
    loadedUser,
    updateUser,
    loading,
    logOut,
    setLoading,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
