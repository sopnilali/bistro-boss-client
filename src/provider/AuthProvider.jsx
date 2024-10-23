import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=> {
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = ()=> {
        return signOut(auth)
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const infoValue = {
        user,
        loading,
        loginUser,
        googleLogin,
        CreateUser,
        logoutUser,
        updateUserProfile
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