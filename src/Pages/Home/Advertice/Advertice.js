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
        <div className='py-24 md:max-w-[92%] mx-auto'>
           <h1 className='text-2xl text-center mb-10'>All Advertice</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {
               slice.map(advertice=><Advertices key={advertice._id} advertice={advertice} ></Advertices>)
              }
        </div>
        <div className='text-center mt-8'>
        <button onClick={loadMore} className='bg-[#d01818] text-white font-bold  px-6 py-1'>See More</button>
        </div>
        </div>
    );
};

export default Advertice;