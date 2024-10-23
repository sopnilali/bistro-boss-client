import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:3000' // replace with your public API URL
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;