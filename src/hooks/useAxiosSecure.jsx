import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-six-delta.vercel.app',
    withCredentials: true,
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;