import React, { createContext, useEffect } from 'react';
import {useState } from 'react';
import { app } from '../../Authentication/firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSign = () => {
        return signInWithPopup(auth, googleProvider);
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

    
    const authInfo = { user, setCategoryName, categoryName, googleSign }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;