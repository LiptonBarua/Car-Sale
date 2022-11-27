import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MyProduct = ({product}) => {
  const{image, title, location, phone, date, time, original, resale, name} =product;
    return (
        <div className="card card-compact h-[74%] shadow-xl">
       <PhotoProvider>
        <PhotoView src={image}>
        <figure><img src={image} className='h-96' alt="" /></figure>
        </PhotoView>
       </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3 className='text-info font-bold'>Saller Name: {name}</h3>
          <p>Location: {location}</p>
          <p>Phone: {phone}</p>
          <div>
          <p>Original Price: {original}</p>
          <p>Resale Price: {resale}</p>
          </div>
          <div className='flex justify-between'>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </div>
          <button className="btn btn-success">Advertise</button>
        </div>
      </div>
    );
};

export default MyProduct;