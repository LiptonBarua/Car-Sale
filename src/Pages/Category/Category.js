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
<article className="overflow-hidden shadow transition hover:shadow-lg">
  <img
    alt="Office"
    src={image}
    className=" w-full h-72 object-cover"
  />

  <div className=' flex justify-end -mt-12'>
    <button className='bg-[#d01818] text-white hover:bg-black font-bold  px-6 py-3'>
      <div className='flex items-center'>
        <del className='text-sm mr-1'>{original}</del>
        <h1 className='text-md'>{resale}</h1>
      </div>
    </button>

  </div>

  <div className="bg-white p-4 sm:p-6">
    <div className='flex justify-between'>
      <time className="block text-xs text-gray-500">
        {moment(year).format('LL')}
      </time>
      <time className="block text-xs text-gray-500">
        {moment.utc(date).local().startOf("seconds").fromNow()}
      </time>
    </div>

    <a href="#">
      <h3 className="mt-5 text-lg text-gray-900">
        {title}
      </h3>
    </a>
    <h4 className=' text-lg flex items-center font-bold'>{name}{userData?.isVerified && <span className=' text-blue-500 ml-1'><MdVerified></MdVerified></span>}</h4>
    <p>Location: {location}</p>
    <p>Phone: {phone}</p>
    <div>
<label onClick={()=>setProductsName(products)} htmlFor="product-modal" className=" mb-3 mt-6 btn btn-sm w-full bg-[#d01818]">Book Now</label>
</div>
  </div>
</article>

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