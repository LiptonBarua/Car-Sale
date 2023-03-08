import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../Assets/Garage_Sport_Car_Logo__1_-removebg-preview.png'

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })

  }
  const manuItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {
      user?.uid ?
        <>
       
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><button onClick={handleLogOut} className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-black rounded-lg'>Log Out</button></li>
          
        </>
        :
        <li><Link to='/login'>Login</Link></li>
    }

  </>
  return (
    <div className="navbar fixed top-0 z-50 md:px-12 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {manuItem}
          </ul>
        </div>
        <Link to='/' className='font-bold text-xl md:text-3xl italic text-orange-500'>
          <img src={logo} alt="" className='w-20' />
        </Link>
      </div>
     <div className='navbar-end'>
     <div className="hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {manuItem}
        </ul>
      </div>
     </div>
      <label htmlFor="my-drawer" tabIndex={2} className="btn btn-ghost ml-24 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
    </div>
  );
};

export default Navber;