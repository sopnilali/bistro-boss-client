import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useMenu = () => {
    const {data: menu = [], refetch} = useQuery({
        queryKey: 'menu',
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-server-six-delta.vercel.app/api/menu')
            return await res.json()
        }
    })
    return [menu, refetch]
};

export default useMenu;