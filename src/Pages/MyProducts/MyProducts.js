import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const {data:myProducts=[], refetch}=useQuery({
        queryKey:['myProducts'],
        queryFn: async()=>{
            const res=await fetch('http://localhost:8000/product')
            const data= await res.json();
            return data;
        }
    })

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
                toast.success('Doctor deleted Successfully')
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