import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const {user} = useContext(AuthContext);


 const {data:myProducts=[], refetch, isLoading}=useQuery({
        queryKey:['myProducts'],
        queryFn: async()=>{
            const res=await fetch(`https://assianment-12-ashy.vercel.app/product?email=${user?.email}`)
            const data= await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
  
    }
    const handleDeleteProduct=id=>{
        fetch(`https://assianment-12-ashy.vercel.app/product/${id}`,{
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


    const handleAdvertice=_id=>{
      fetch(`https://assianment-12-ashy.vercel.app/advertice/${_id}`,{
        method: 'PUT',
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged>0){
            toast.success('advertice added Successfully');
            refetch()
        }
      })

    }
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-10'>
            {
                myProducts.map(product=><MyProduct key={product._id} product={product} handleDeleteProduct={handleDeleteProduct} handleAdvertice={handleAdvertice}></MyProduct>)
            }
        </div>
        </div>
    );
};

export default MyProducts;