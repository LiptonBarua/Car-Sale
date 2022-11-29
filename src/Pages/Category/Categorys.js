
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import CategoryModel from './CategoryModel';



const Product = () => {
 
  const [productsName, setProductsName] = useState('')
  

  const products= useLoaderData();
  console.log(products)
    return (
      <section className='my-10'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        
        {
          products?.map(products=><Category key={products._id} products={products} setProductsName={setProductsName}></Category>)
        }
       </div>
       <div>
        <CategoryModel key={products._id} products={products} productsName={productsName} ></CategoryModel>
       </div>
      </section>
    );
};

export default Product;