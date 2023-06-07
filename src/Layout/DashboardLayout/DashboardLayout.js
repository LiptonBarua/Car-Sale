import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hookes/useAdmin';
import useBuyer from '../../Hookes/useBuyer';
import useSaller from '../../Hookes/useSaller';
import Navber from '../../Pages/Share/Navbar/Navber';



const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);


  const { data: sellectData = [] } = useQuery({
    queryKey: ['sellectDatabase'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/users/${user?.email}`)
      const data = await res.json()
      return data;
    }
  })

  return (
    <div>
       <Navber></Navber>
<div>
     
      <div classNameName="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" classNameName="drawer-toggle" />
        <div classNameName="drawer-content my-24">
          <Outlet></Outlet>
        </div>
        <div classNameName="drawer-side ">
          <label htmlFor="my-drawer" classNameName="drawer-overlay"></label>
          <ul classNameName="menu my-24 py-4 w-80 text-base-content">

            {
              isBuyer &&  (<li><Link to='/dashboard'>My Orders</Link></li>
            )}
            {
              isAdmin && (<>

              <li><Link to='/dashboard/allSeller'>All Users</Link></li>
               
              </>
            )}
            {
              isSeller && (<>
                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                <li><Link to='/dashboard/myProducts'>Products</Link></li>
              </>
            )}

          </ul>

        </div>
      </div>
    </div>
    </div>
    
  );
};

export default DashboardLayout;