import React, { useState } from 'react';
import loginImg from '../../assets/img/others/authentication2.png'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
const Register = () => {

  const { CreateUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

  const axiosPublic = useAxiosPublic();

  const handleRegister = async (data) => {

    const imageFile = { image: data.photo[0] }

    const result = await axios.post(image_hosting_api, imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (result.data.success) {
      const full_name = data.full_name
      const email = data.email
      const photo = result.data.data.display_url
      const password = data.password
      CreateUser(email, password)
        .then(res => {
          reset();
          updateUserProfile(full_name, photo)
          .then(() => {
            const userInfo = {
              name: data.full_name,
              email: data.email,
              photo: photo
            }
            axiosPublic.post('/api/users', userInfo)
            .then(res => {
              if(res.status == 200){
                navigate('/')
                Swal.fire({
                  title: "Registration Successful",
                  showConfirmButton:false,
                  icon: "success",
                  timer: 1500
                })
              }
            })

          })
        })
    }
  }


  return (
    <>
            <Helmet>
            <title> Register | Bistro Boss</title>
        </Helmet>
      <div className="hero bg-forms min-h-screen" >
        <div className="hero-content w-full  min-h-[80%] flex-col lg:flex-row-reverse border shadow-lg drop-shadow-lg ">
          <div className="text-center lg:text-left max-w-2xl">
            <img src={loginImg} alt="" />
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5 lg:my-5">
            <div className="card-header">
              <h2 className="text-xl -my-10 font-semibold text-center">Registration</h2>
            </div>
            <form onSubmit={handleSubmit(handleRegister)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Type your name" {...register("full_name", { required: true })} className="input input-bordered" />
                {errors.full_name?.type === 'required' && <p className='text-red-600' role="alert">Name is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Type your Email" {...register("email", { required: true })} className="input input-bordered"/>
                {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" placeholder="Type your Email" {...register("photo")} className="file file-input-bordered file-input"  />
                {errors.photo?.type === 'required' && <p className='text-red-600' role="alert">Photo is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Type your Password"  {...register("password",  { minLength: 8 })} className="input input-bordered" />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="form-control ">
                <button type='submit' className="btn btn-primary -mb-6 mt-2">Registration</button>
              </div>
            </form>
            <div >
            </div>

            <p className="text-center my-4">Already registered? Go to <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;