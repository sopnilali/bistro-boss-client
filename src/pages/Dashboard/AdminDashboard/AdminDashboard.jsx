import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdminDashboard = () => {
    return (
        <div>
        <Helmet>
            <title> Welcome to Admin Dashboard | Bistro Boss</title>
        </Helmet>
            <h2 className="text-4xl">Welcome to Admin Dashboard </h2>
        </div>
    );
};

export default AdminDashboard;