import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,} from "firebase/auth";

import { auth } from "../Firebase/firebase.init";
import Loading from "../Components/Loading/Loading";

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  // ✅ Register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Logout
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    
  };

  useEffect(() => {
  setLoading(true);
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setLoading(false);

    if (currentUser) {
      const email = currentUser.email || currentUser.providerData[0]?.email || `${currentUser.uid}@anonymous.com`;
      const photoURL = currentUser.photoURL || currentUser.providerData[0]?.photoURL;
      setUser({ ...currentUser, email, photoURL });
    } else {
      setUser(null);
    }
  });

  return () => unSubscribe();
}, []);


  if (loading) {
    return <Loading />;
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
