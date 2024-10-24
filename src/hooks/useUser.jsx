import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useUser = () => {

    const axiosSecure = useAxiosSecure();
    const {user}= useAuth();

    const {data : userData, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/users`)
            return res.data
        }
    })

    return [userData, refetch];
};

export default useUser;