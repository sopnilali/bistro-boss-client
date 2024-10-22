import React, { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/img/others/authentication2.png'
import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {

    const [disabled, setDisabled ] = useState(true)
    const handleLoginForm = (e)=> {
        e.preventDefault();
        // submit form logic here
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        
        // clear form inputs
        e.target.reset();
    }

    const handlecaptcha = (e)=> {
        let user_captcha_value = e.target.value
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }



    useEffect(()=>{
        loadCaptchaEnginge(6)
    })
    
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left max-w-2xl">
      <img src={loginImg} alt="" />
    </div>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <div className="card-header">
          <h2 className="text-xl -my-10 font-semibold text-center">Login</h2>
        </div>
      <form onSubmit={handleLoginForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
            <span className="label-text"></span>
          </label>
          <input onBlur={handlecaptcha} type="text" placeholder="type here" name='captcha' className="input input-bordered" />
        </div>
        <div className="form-control ">
        <button className="btn btn-primary " disabled={disabled}>Login</button>
        </div>
      </form>
      <div >
      <div className='divider space-y-3'>Social Login</div>
      <SocialLogin/>
      </div>
      
      
      <p className="text-center ">Go to <Link to="/">Home</Link></p>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;