import React, { useContext, useState, useEffect } from 'react';
import {auth,firestore} from '../firebase/firebase.utils'

const AuthContext = React.createContext()

const userRef = firestore

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const[currentUser,setCurrentUser]=useState()
    
    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

