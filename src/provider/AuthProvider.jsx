import { createContext, useEffect, useState } from "react"
import propTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const authContext = createContext();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  //sign in by google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  //sign Up with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //sign In with email and password
  const LogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  //update Profile
  const profileUpdate = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL : image
    })
  }

  //track user information
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })

    return () => unSubscribe();
  }, [])


    const authInfo = {
      user,
      loading,
      signInGoogle,
      createUser,
      LogIn,
      profileUpdate
    }

  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: propTypes.node.isRequired,
}

export default AuthProvider
