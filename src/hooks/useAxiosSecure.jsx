import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useEffect } from 'react';



const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();

    const axiosSecure = axios.create({
        baseURL: 'https://bistro-boss-server-six-delta.vercel.app',
    })


    useEffect(()=> {
        // request interceptor to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        console.log(response)
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logoutUser();
            navigate('/login');
        }
        return Promise.reject(error);
    })

    },[logoutUser, navigate, axiosSecure])


    return [axiosSecure];
};

export default useAxiosSecure;