import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const {googleLogin} = useAuth();

    const navigate = useNavigate();

    const handleSocialLogin = (media)=>{
        media()
        .then(res => {
            console.log(res);
            navigate('/')
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