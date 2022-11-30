import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from "axios";
import useBuyer from '../../Hookes/useBuyer';




const Bookings = () => {
   const {user} = useContext(AuthContext);
   const [isBuyer] = useBuyer(user?.email);

  const [bookings, setPost] = React.useState(null);
  const baseURL = `https://assianment-12-ashy.vercel.app/booking?email=${user?.email}`;

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, [user?.email]);
  
    if (!bookings) return null;







    return (
   <>
{
     isBuyer && <div>
     <h1 className='text-2xl'>My Orders: {bookings.length}</h1>
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
             booking.price && !booking.paid && <Link to={`/dashboard/payments/${booking._id}`}><button className='btn btn-primary btn-sm'>Pay Now</button></Link>
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
    </div>
}
   </>
    );
};

export default Bookings;