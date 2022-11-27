import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellerAndBuyer = () => {
    const {data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res= await fetch('http://localhost:8000/users')
            const data= await res.json()
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
      <th>Email</th>
      
    </tr>
  </thead>
  <tbody>
  
   {
      users?.map((users,i)=> <tr key={users._id}>
          <th>{i+1}</th>
          <th>{users.name}</th>
          <th>{users.email}</th>
        
          {/* <td>{booking.price}</td>
          <td>{booking.location}</td> */}
        </tr>)
   }
  </tbody>
</table>
</div>
      </div>
    );
};

export default AllSellerAndBuyer;