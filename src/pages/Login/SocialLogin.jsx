import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const {googleLogin} = useAuth();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const navigate = useNavigate();

    const handleSocialLogin = (media)=>{
        media()
        .then(res => {
            console.log(res);
            navigate(from, {replace: true})
            Swal.fire({
                title: "Logging Successfully",
                icon: "success"
              });
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