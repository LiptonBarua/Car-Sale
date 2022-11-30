import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSaller from '../../Hookes/useSaller';
import Loading from '../../Pages/Loading/Loading';

const SellerRouter = ({children}) => {
    const{user, loading} = useContext(AuthContext);
const [isSeller, isSellerLoading] = useSaller(user?.email)
const location = useLocation();
console.log(isSellerLoading, loading)
if(loading || isSellerLoading){
    return <Loading></Loading>
}
if(user && isSeller){
    return children
}
return (
   <Navigate to='/login' state={{from: location}} replace></Navigate>
);
}
export default SellerRouter;



