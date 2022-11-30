import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { MdOutlineVerifiedUser } from "react-icons/md";
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
        <div className="card card-compact h-[74%] shadow-lg bg-black">
       <PhotoProvider>
        <PhotoView src={image}>
        <figure><img src={image} className='h-96' alt="" /></figure>
        </PhotoView>
       </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <h4 className='text-info text-lg flex items-center font-bold'>Saller Name: {sellerName}{userData?.isVerified &&<span className=' text-blue-500'><MdOutlineVerifiedUser></MdOutlineVerifiedUser></span>}</h4>
          <p>Location: {location}</p>
          <p>Phone: {phone}</p>
          
          <div className='flex justify-between'>
          <p>Original Price: {original}</p>
          <p>Resale Price: {resale}</p>
          </div>
          <div className='flex justify-between'>
            <p>Date: {moment.utc(date).local().startOf("seconds").fromNow()}</p>
            <p>Year {moment("20111031", "YYYYMMDD").fromNow()}</p>
          </div>
         
          <div>
          
            <label onClick={()=>setProductsName(products)} htmlFor="product-modal" className="btn btn-sm w-full btn-primary">Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default Category;