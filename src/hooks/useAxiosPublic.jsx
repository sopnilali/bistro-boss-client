import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-six-delta.vercel.app', // replace with your public API URL
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;