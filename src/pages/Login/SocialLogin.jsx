import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialLogin = () => {

    const {googleLogin} = useAuth();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate();
    
    
    const handleSocialLogin = (media)=>{
        media()
        .then(res => {  
            const userInfo = {
                name: res.user?.displayName,
                email: res.user?.email,
                photo: res.user?.photoURL
            }
            axiosPublic.post('/api/users', userInfo)
            .then(res => {
                Swal.fire({
                title: "Logging Successfully",
                icon: "success"
              });
              navigate(from, {replace: true})
            })
            
        })
    }
    return (
        <div className='flex justify-between mx-7'>
            <button onClick={()=> handleSocialLogin(googleLogin)} className='btn btn-primary btn-sm'>Google</button>
            {/* <button onClick={()=> handleSocialLogin()} className='btn btn-secondary btn-sm'>Github</button> */}
        </div>
    );
};

export default SocialLogin;