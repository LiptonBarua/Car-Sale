import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { MdVerified } from "react-icons/md";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Advertices = ({advertice}) => {
    const [userData, setUserData] = useState({});
    console.log(userData)
    const{name, email, title, location, date, time, image, original, resale, phone, year} =advertice;
    const [loadUserData, setLoadUserData] = useState([]);
  
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
           <div className="card card-compact h-[90%] shadow-lg">
       <PhotoProvider>
        <PhotoView src={image}>
        <figure><img src={image} className='h-96' alt="" /></figure>
        </PhotoView>
       </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
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
          
          </div>
        </div>
      </div>
      
        </div>
    );
};

export default Advertices;