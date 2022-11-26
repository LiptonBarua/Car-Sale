import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Products = ({products}) => {
    const{name, title, location, date,time, image, original, resale} =products;
    return (
        <div className="card card-compact h-[74%] shadow-xl">
       <PhotoProvider>
        <PhotoView src={image}>
        <figure><img src={image} alt="" /></figure>
        </PhotoView>
       </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3 className='text-info'>Saller Name: {name}</h3>
          <p>Location: {location}</p>
          <div>
          <p>Original Price: {original}</p>
          <p>Resale Price: {resale}</p>
          </div>
          <div className='flex justify-between'>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </div>
         
          <div>
          
            <button className="btn btn-sm w-full btn-primary"><label htmlFor="product-modal">Buy Now</label></button>
          </div>
        </div>
      </div>
    );
};

export default Products;