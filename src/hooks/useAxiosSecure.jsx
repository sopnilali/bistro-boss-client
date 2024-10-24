import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-six-delta.vercel.app',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logoutUser} = useAuth();
    axiosSecure.interceptors.request.use((config)=> {
        return config;
    },
    (err)=> {
        return Promise.reject(err);
    }
)

// intercepts 401 and 403 status
axiosSecure.interceptors.response.use((response)=>{
    return response
}, async(err)=> {
    const status = err.response.status
    if (status === 401 || status === 403) {
        await logoutUser();
        navigate('/login');
    }
    return Promise.reject(err);
})


    return axiosSecure;
};

export default useAxiosSecure;