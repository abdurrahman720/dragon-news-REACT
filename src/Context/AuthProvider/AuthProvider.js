import React, { createContext } from 'react';
import {useState } from 'react';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [categoryName, setCategoryName] = useState('All News');
    const user = { displayName: 'Batash Ali' }
    
    const authInfo = { user, setCategoryName, categoryName }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;