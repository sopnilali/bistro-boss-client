import React from 'react';
import { FaAd, FaDoorOpen, FaHome, FaList, FaListAlt, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaShop, FaShopLock } from 'react-icons/fa6';
import useCarts from '../hooks/useCarts';

const AdminLayout = () => {

    const {user, logoutUser} = useAuth();
    const navigate = useNavigate();

    const [cart]= useCarts();


    const handleLogout = () => {
        logoutUser()
        .then(res => {
          navigate('/login')
          Swal.fire({
            title: "Logged out",
            icon: "success"
          });
        })
      }


    return (
        <div className='container mx-auto'>
            <div className='flex lg:flex-row md:flex-row flex-col'>
                 {/* dashboard sidebar */}
            <div className='lg:max-w-64 md:max-w-64  min-h-screen bg-orange-400 p-4'>
                <h2 className=' text-2xl text-center font-bold py-5'>User Dashboard</h2>
                <ul className='menu space-y-2 '>
                    <li >
                        <NavLink to={'/dashboard/'}>User Home</NavLink>
                    </li>
                     <li >
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart/>My Cart ({cart.length})</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/dashboard/review'}><FaAd/> Add Review</NavLink>
                    </li>


                    <li>
                        <NavLink to={'/dashboard/booking'}><FaList/> My Booking</NavLink>
                    </li>
                    <div className='divider'></div>
                    <li>
                        <NavLink to={'/'}> <FaHome/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/menu'}> <FaListAlt/>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order'}> <FaShop/>Order</NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout}> <FaDoorOpen/>Logout</button>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className=' p-4 flex-1 '>

                <Outlet/>
            </div>
            </div>
        </div>
    );
};

export default AdminLayout;