import React, { useContext, useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
// import Loading from '../../Pages/Loading/Loading';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Bookings = () => {

  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([])
  
  
  useEffect(()=>{
  if(user?.email){
      fetch(`http://localhost:8000/booking?email=${user?.email}`,{
        headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res=>res.json())
      .then(data=>setBookings(data))
  }
  }, [user?.email])


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
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    
     {
        bookings?.map((booking,i)=> <tr key={booking._id}>
            <th>{i+1}</th>
            <th>{booking.name}</th>
            <td>{booking.title}</td>
            <td>{booking.price}</td>
            <td>{booking.location}</td>
            <td>{
            booking.price && !booking.paid && <Link to={`/payments/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay Now</button></Link>
            }
            {
              booking.price && booking.paid && <span className='text-green-500'>Paid</span>
            }
            </td>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;