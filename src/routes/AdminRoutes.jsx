import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const AdminRoutes = ({children}) => {

    const {user, loading} = useAuth();

    const [isAdmin, isAdminLoading] = useAdmin();
    
    const location = useLocation();

    if(loading || isAdminLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user || isAdmin){
        return children
    }

    return <Navigate to={"/login"} state={{from: location}} replace/>;

};

export default AdminRoutes;