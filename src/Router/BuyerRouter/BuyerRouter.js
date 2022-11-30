import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../Hookes/useBuyer';
import Loading from '../../Pages/Loading/Loading';

const BuyerRouter = ({children}) => {
    const{user, loading} = useContext(AuthContext);
const [isRouter, isRouterLoading] = useBuyer(user?.email)
const location = useLocation();
console.log(isRouterLoading, loading)
if(loading || isRouterLoading){
    return <Loading></Loading>
}
if(user && isRouter){
    return children
}
return (
   <Navigate to='/login' state={{from: location}} replace></Navigate>
);
}
export default BuyerRouter;



