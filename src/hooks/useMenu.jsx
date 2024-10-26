import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useMenu = () => {

    const baseURL = import.meta.env.VITE_BASE_URL
    const {data: menu = [], refetch} = useQuery({
        queryKey: 'menu',
        queryFn: async () => {
            const res = await fetch(`${baseURL}/api/menu`)
            return await res.json()
        }
    })
    return [menu, refetch]
};

export default useMenu;