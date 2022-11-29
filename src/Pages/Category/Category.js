import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Category = ({products, setProductsName}) => {
    const{name, sellerName,email, title, location, date,time, image, original, resale, phone, year} =products;
    const [loadUserData, setLoadUserData] = useState([]);
		const [userData, setUserData] = useState({});
    console.log(userData)
		useEffect(() => {
			
			fetch(`http://localhost:8000/users`)
				.then(res => res.json())
			.then(data => setLoadUserData(data))
		}, []);
	
	useEffect(() => {
		const data = (loadUserData.find(e => e.email === email) )
		setUserData(data);
	}, [email, loadUserData])
    return (
        <div className="card card-compact h-[74%] shadow-xl">
       <PhotoProvider>
        <PhotoView src={image}>
        <figure><img src={image} className='h-96' alt="" /></figure>
        </PhotoView>
       </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3 className='text-info font-bold'>Saller Name:{name}</h3>
          <p>Location: {location}</p>
          <p>Phone: {phone}</p>
          <div>
          <p>Original Price: {original}</p>
          <div className='flex justify-between'>
          <p>Resale Price: {resale}</p>
          <p>Year {year}</p>
          <p>
					{sellerName}{userData?.isVerified && <span className='ml-5 text-blue-500'>verified</span>}
				</p>
          </div>
          </div>
          <div className='flex justify-between'>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </div>
         
          <div>
          
            <label onClick={()=>setProductsName(products)} htmlFor="product-modal" className="btn btn-sm w-full btn-primary">Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default Category;