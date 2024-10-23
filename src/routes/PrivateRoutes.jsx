import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) return <h1>Loading...</h1>
    
    if(user){
        return children
    }
    return <Navigate to={"/login"} state={{from: location}} replace/>;
};

export default PrivateRoutes;