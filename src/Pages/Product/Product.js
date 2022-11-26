import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModel from './ProductModel';
import Products from './Products';


const Product = () => {

  const products= useLoaderData();
  console.log(products)
    return (
      <section className='my-10'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        
        {
          products?.map(products=><Products key={products._id} products={products}></Products>)
        }
       </div>
       <div>
        <ProductModel></ProductModel>
       </div>
      </section>
    );
};

export default Product;