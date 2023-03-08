import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { MdVerified} from "react-icons/md";



const MyProduct = ({product, handleDeleteProduct, handleAdvertice}) => {
  const{_id,image,email, title, location, phone, date, original, resale, name, year, advertice} =product;
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
          {
            !advertice && <div className="card h-[90%] shadow-lg">
            <PhotoProvider>
             <PhotoView src={image}>
             <figure><img src={image} className='h-96' alt="" /></figure>
             </PhotoView>
            </PhotoProvider>
             <div className="card-body">
               <h2 className="card-title">{title}</h2>
               {/* <h3 className='text-info font-bold'>Saller Name: {name}</h3> */}
               <h4 className=' text-lg flex items-center font-bold'>Saller Name: {name}{userData?.isVerified &&<span className=' text-blue-500 ml-1'><MdVerified></MdVerified></span>}</h4>
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
               <p>Year: {moment(year).format('LL')}</p>
               </div>
               <button onClick={()=>handleAdvertice(_id)} className="btn btn-success">Advertise</button>
               <button onClick={()=>handleDeleteProduct(_id)} className="btn btn-error">Delete</button>
             </div>
           </div>
          }
        </div>
    );
};

export default MyProduct;