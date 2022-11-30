import moment from 'moment';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MyProduct = ({product, handleDeleteProduct}) => {
  const{_id,image, title, location, phone, date, original, resale, name, year} =product;
    return (
        <div className="card card-compact w-80 h-[70%] shadow-lg bg-black">
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
        
          <div className='flex justify-between'>
          <p>Original Price: {original}</p>
          <p>Resale Price: {resale}</p>
          </div>
          </div>
          <div className='flex justify-between'>
          <p>Date: {moment.utc(date).local().startOf("seconds").fromNow()}</p>
          <p>Year: {year}</p>
          </div>
          <button className="btn btn-success">Advertise</button>
          <button onClick={()=>handleDeleteProduct(_id)} className="btn btn-error">Delete</button>
        </div>
      </div>
    );
};

export default MyProduct;