import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className='container mx-auto'>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;