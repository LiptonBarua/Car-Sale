import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { MdVerified } from "react-icons/md";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Advertices = ({ advertice }) => {
  const [userData, setUserData] = useState({});
  console.log(userData)
  const { name, email, title, location, date, time, image, original, resale, phone, year } = advertice;
  const [loadUserData, setLoadUserData] = useState([]);

  useEffect(() => {

    fetch(`https:server12.vercel.app/users`)
      .then(res => res.json())
      .then(data => setLoadUserData(data))
  }, []);

  useEffect(() => {
    const data = (loadUserData.find(e => e.email === email))
    setUserData(data);
  }, [email, loadUserData])


  return (
    <div>
      <div className="flex justify-center relative h-[580px]">
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
            <h4 className=' text-lg flex items-center font-bold'>{name}{userData?.isVerified && <span className=' text-blue-500 ml-1'><MdVerified></MdVerified></span>}</h4>
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

          </div>
        </div>
      </div>

    </div>
  );
};

export default Advertices;

