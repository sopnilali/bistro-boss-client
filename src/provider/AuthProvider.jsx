import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();
    
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=> {
        return signInWithRedirect(auth, googleProvider)
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

    const deleteUserProfile = ()=> {
        return deleteUser(auth.currentUser)
    }

    const infoValue = {
        user,
        loading,
        loginUser,
        googleLogin,
        CreateUser,
        logoutUser,
        deleteUserProfile,
        updateUserProfile
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {   
            const userEmail = currentUser?.email || user?.email;  
            const loggedUser = { email: userEmail }; 
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                axiosPublic.post('/api/jwt', loggedUser, {withCredentials:true})
                .then(res => {
                    console.log('token response', res.data);
                })
            }
            else{
                axiosPublic.post('/api/logout', loggedUser, {withCredentials:true})
                .then(res => console.log(res))
            }
            
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