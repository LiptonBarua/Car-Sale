import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { MdVerified} from "react-icons/md";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Category = ({products, setProductsName}) => {
    const{name,email, title, location, date, image, original, resale, phone, year} =products;
    const [loadUserData, setLoadUserData] = useState([]);
		const [userData, setUserData] = useState({});
    console.log(userData)
		useEffect(() => {
			
			fetch(`https://server12.vercel.app/users`)
				.then(res => res.json())
			.then(data => setLoadUserData(data))
		}, []);
	
	useEffect(() => {
		const data = (loadUserData.find(e => e.email === email) )
		setUserData(data);
	}, [email, loadUserData])


    return (
      <div>
      <div className="flex justify-center relative h-[580px] w-full">
<div
className="block max-w-sm rounded-lg bg-slate-100 shadow-lg dark:bg-neutral-700">
<a href="#!" data-te-ripple-init data-te-ripple-color="light">
<PhotoProvider>
<PhotoView src={image}>
<img className="rounded-t-lg h-80 w-full" src={image} alt="" />
</PhotoView>
</PhotoProvider>
  </a>
<div className="p-6">
  <h5
    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    {title}
  </h5>
  <h4 className=' text-lg flex items-center font-bold'>Saller Name: {name}{userData?.isVerified &&<span className=' text-blue-500 ml-1'><MdVerified></MdVerified></span>}</h4>
  <p>Location: {location}</p>
  <p>Phone: {phone}</p>
 <div className='flex justify-between'>
 <p>Original Price: {original}</p>
<p>Resale Price: {resale}</p>
 </div>
<div className='flex justify-between'>
<p>Date: {moment.utc(date).local().startOf("seconds").fromNow()}</p>
<p>Year: {moment(year).format('LL')}</p>
</div>
<div>
<label onClick={()=>setProductsName(products)} htmlFor="product-modal" className=" mb-3 mt-6 btn btn-sm w-full bg-lime-700">Book Now</label>
</div>
 
</div>
</div>
</div>
  
    </div>
    );
};

export default Category;


// <div className="card card-compact h-[90%] shadow-lg">
//        <PhotoProvider>
//         <PhotoView src={image}>
//         <figure><img src={image} className='h-96' alt="" /></figure>
//         </PhotoView>
//        </PhotoProvider>
//         <div className="card-body">
//           <h2 className="card-title text-2xl">{title}</h2>
//           <h4 className=' text-lg flex items-center font-bold'>Saller Name: {name}{userData?.isVerified &&<span className=' text-blue-500 ml-1'><MdVerified></MdVerified></span>}</h4>
//           <p>Location: {location}</p>
//           <p>Phone: {phone}</p>
          
//           <div className='flex justify-between'>
//           <p>Original Price: {original}</p>
//           <p>Resale Price: {resale}</p>
//           </div>
//           <div className='flex justify-between'>
//             <p>Date: {moment.utc(date).local().startOf("seconds").fromNow()}</p>
         
//             <p>Year: {moment(year).format('LL')}</p>
//           </div>
         
//           <div>
          
//             <label onClick={()=>setProductsName(products)} htmlFor="product-modal" className="btn btn-sm w-full btn-primary">Book Now</label>
//           </div>
//         </div>


//         <div>
          
//         </div>
//       </div>