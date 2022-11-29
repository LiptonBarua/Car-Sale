import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hookes/useAdmin';
import Navber from '../../Pages/Share/Navbar/Navber';



const DashboardLayout = () => {
  const {user} =useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navber></Navber>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">

            <li><Link to='/dashboard'>My Booking</Link></li>
            {
              isAdmin && <>
                 <li><Link to='/addProduct'>Add Product</Link></li>
                 <li><Link to='/allSeller'>All Users</Link></li>
              </>
            }
         
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;