import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
               <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;