import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Advertices from './Advertices';

const Advertice = () => {
  const[limit, setLimit] = useState(3)
  
    const[advertices, setAdvertice]=useState([])
    const slice= advertices.slice(0, limit)

  
    const loadMore=()=> {
      setLimit(limit+limit)
   }
    useEffect(()=>{
      fetch(`https://server12.vercel.app/products?advertice=true`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setAdvertice(data)
        
      })
    },[])




    return (
        <div className='my-24 md:max-w-[1280px] mx-auto'>
           <h1 className='text-2xl text-center mb-10'>All Advertice</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
              {
               slice.map(advertice=><Advertices key={advertice._id} advertice={advertice} ></Advertices>)
              }
        </div>
        <div className='text-center'>
        <button onClick={loadMore} className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-black px-5'>See More</button>
        </div>
        </div>
    );
};

export default Advertice;