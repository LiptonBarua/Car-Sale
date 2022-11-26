import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';


const Product = () => {

  const products= useLoaderData();
  console.log(products)
    return (
       <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        
        {
          products?.map(products=><Products key={products._id} products={products}></Products>)
        }
       </div>
    );
};

export default Product;