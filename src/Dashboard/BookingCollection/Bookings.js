import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Bookings = () => {
 
    const {data:booking =[]} = useQuery({
        queryKey: ['booking'],
        queryFn: async()=>{
            const res= await fetch('http://localhost:8000/booking',{
              headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data= await res.json();
            return data;
        }
    })
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table table-zebra w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>Price</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
    
     {
        booking?.map((booking,i)=> <tr key={booking._id}>
            <th>{i+1}</th>
            <th>{booking.name}</th>
            <td>{booking.title}</td>
            <td>{booking.price}</td>
            <td>{booking.location}</td>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;