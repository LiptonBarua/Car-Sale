import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const {data:myProducts=[]}=useQuery({
        queryKey:['myProducts'],
        queryFn: async()=>{
            const res=await fetch('http://localhost:8000/product')
            const data= await res.json();
            return data;
        }
    })
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                myProducts.map(product=><MyProduct key={product._id} product={product}></MyProduct>)
            }
        </div>
        </div>
    );
};

export default MyProducts;