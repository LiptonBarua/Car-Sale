import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';



export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn= (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=(provider)=>{
      return signInWithPopup(auth, provider)
    }
   
    const updateUser=(userInfo)=>{
      return updateProfile(auth.currentUser, userInfo)
    }
    const logOut=()=>{
     return signOut(auth)
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
      })
      return ()=>unsubscribe();
    })
    const authInfo={user,createUser, signIn, googleSignIn, logOut, updateUser}
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;