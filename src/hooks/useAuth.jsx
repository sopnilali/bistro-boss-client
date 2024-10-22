import { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';

const useAuth = ()=>{
    const all = useContext(AuthContext)
    return all;
}
export default useAuth;