import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../Assets/Garage_Sport_Car_Logo__1_-removebg-preview.png'
import useAdmin from '../../../Hookes/useAdmin';
import useSaller from '../../../Hookes/useSaller';
import useBuyer from '../../../Hookes/useBuyer';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

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
       <li>
							<Link to={`${isSeller ? "/dashboard/addProduct":''}${isAdmin ? "/dashboard/allSeller":''}${isBuyer ? "/dashboard":''}`}>Dashboard</Link>
						</li>
        
          <li><button onClick={handleLogOut} className='bg-lime-700 text-black font-bold rounded-lg'>Log Out</button></li>
          
        </>
        :
        <li><Link to='/login'>Login</Link></li>
    }

  </>
  return (
    <div className="navbar fixed top-0 z-50 md:px-12 bg-black">
      <div className="navbar-start">
         <label htmlFor="my-drawer" tabIndex={2} className="text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        <Link to='/' className='font-bold text-xl md:text-3xl italic text-orange-500'>
          <img src={logo} alt="" className='w-20' />
        </Link>
      </div>
     <div className='navbar-end'>
     <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-white p-0">
          {manuItem}
        </ul>
      </div>
     </div>
     <div className="dropdown dropdown-end">
     <label tabIndex={0} className="text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
  <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-black text-white rounded-box w-52">
  {manuItem}
  </ul>
</div>


   
    </div>
  );
};

export default Navber;