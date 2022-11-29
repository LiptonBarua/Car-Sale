import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const {user} = useContext(AuthContext);
    // const [myProducts, setOrders] = useState([]);

    // if(loading){
    //     return <Loading></Loading>
    // }
    
    // useEffect(()=>{
    // if(user?.email){
    //     fetch(`http://localhost:8000/product?email=${user?.email}`,{
    //       headers:{
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //       }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>setOrders(data))
    // }
    // }, [user?.email])

    const {data:myProducts=[], refetch, isLoading}=useQuery({
        queryKey:['myProducts'],
        queryFn: async()=>{
            const res=await fetch(`http://localhost:8000/product?email=${user?.email}`)
            const data= await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
  
    }
    const handleDeleteProduct=id=>{
        fetch(`http://localhost:8000/product/${id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast.success('Doctor deleted Successfully');
                
                refetch()
            }
         
        })
    }
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10'>
            {
                myProducts.map(product=><MyProduct key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}></MyProduct>)
            }
        </div>
        </div>
    );
};

export default MyProducts;