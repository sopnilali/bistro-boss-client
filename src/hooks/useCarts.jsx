import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCarts = () => {

    const [axiosSecure] = useAxiosSecure();

    const {user} = useAuth();

    const {data: cart = [], refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/cart?email=${user?.email}`)
            return res.data
        }
    })

    return [cart, refetch];
};

export default useCarts;