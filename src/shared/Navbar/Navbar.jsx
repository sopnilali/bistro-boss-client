import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaShoppingCart } from "react-icons/fa";
import useCarts from '../../hooks/useCarts';

const Navbar = () => {

  const {user, logoutUser} = useAuth();
  const navigate = useNavigate();

  const [cart, refetch] = useCarts();
  refetch()

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

    const navlinks = <>
          <li className='mr-2 md:py-0 py-2'><NavLink to={'/'}>Home</NavLink></li>
          <li  className='mr-2 md:py-0 py-2'><NavLink to={'/menu'}>Our Menu</NavLink></li>
          <li  className='mr-2 md:py-0 py-2'><NavLink to={'/order/salad'}>Our Order</NavLink></li>
          <li  className='mr-2 md:py-0 py-2'><NavLink to={'/secret'}>Secret</NavLink></li>
          {user ? <li  className='mr-2 md:py-0 py-2'><NavLink className="py-2 bg-opacity-40 hover:bg-gray-800" to={'/user/cart'}><div className="badge badge-secondary w-full text-md h-full"> <FaShoppingCart className='mr-1' />+{cart.length}</div></NavLink></li> : ""}
          
    </>


    return (
        <>
         <div className="container mx-auto navbar fixed text-white z-10 bg-opacity-30 bg-gray-800">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  {user ? <button onClick={handleLogout} className='btn px-4 rounded-md'>Logout</button> :<li className='list-none'><NavLink className='list-none btn  rounded-md' to={'/login'}>Login</NavLink></li>}
  </div>
</div>   
        </>
    );
};

export default Navbar;