import React, { createContext, useEffect } from 'react';
import {useState } from 'react';
import { app } from '../../Authentication/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSign = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const emailSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user:', currentUser);
           setUser(currentUser);
       })
        return () => {
            unsubscribe();
        }
    },[])
 
    const [categoryName, setCategoryName] = useState('All News');

    
    const authInfo = { user, setCategoryName, categoryName, googleSign , logOut, emailSignIn, emailSignUp,updateName }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;