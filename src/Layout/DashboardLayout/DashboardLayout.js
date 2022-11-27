import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../../Pages/Share/Navbar/Navber';



const DashboardLayout = () => {
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

            <li><Link to='/dashboard'>Booking Collection</Link></li>
            <li><Link to='/addProduct'>Add Product</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;