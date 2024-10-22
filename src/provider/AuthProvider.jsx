import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=> {
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = ()=> {
        return signOut(auth)
    }

    const infoValue = {
        user,
        loading,
        loginUser,
        googleLogin,
        logoutUser
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;      
            setUser(currentUser);
            setLoading(false);
        })
        
        
        
        return () => {
            unSubscribe();
        }
    }, [])


    
    return (
        <AuthContext.Provider value={infoValue}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;