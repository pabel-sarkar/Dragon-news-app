import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loding,setLoding]=useState(true);


      //user create
      const creatUser = (email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
      }

    //  user LogOut
    const userLogOut = ()=>{
        return signOut(auth);
    }

    // user login 
    const loginUser = (email,password)=>{
      setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // update user profile
    const updateUser = (updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
    }

     // user set
      useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

            setUser(currentUser);
            setLoding(false);
        })
        return ()=>{
         unsubscribe()
        }
      },[])

    const authData = {
     user,
     setUser,
     creatUser,
     userLogOut,
     loginUser,
     loding,
     setLoding,
     updateUser
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;