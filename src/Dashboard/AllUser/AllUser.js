import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {
    const {data:users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res= await fetch('http://localhost:8000/users')
            const data= await res.json()
            return data;
        }
    })

    const handleMakeAdmin=id=>{
      fetch(`http://localhost:8000/users/admin/${id}`,{
          method: 'PUT',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          toast.success('make admin successfully');
          refetch();
        }
         
      })
  }
    return (
        <div>
        <div className="overflow-x-auto">
<table className="table table-zebra w-full">

  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Email</th>
      <th>Admin</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  
   {
      users?.map((users,i)=> <tr key={users._id}>
          <th>{i+1}</th>
          <th>{users.name}</th>
          <th>{users.email}</th>
          <td>{users?.role !=="admin" && <button onClick={()=>handleMakeAdmin(users._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
          <th><button className='btn btn-sm btn-error'>Delete</button></th>
    
        </tr>)
   }
  </tbody>
</table>
</div>
      </div>
    );
};

export default AllUser;