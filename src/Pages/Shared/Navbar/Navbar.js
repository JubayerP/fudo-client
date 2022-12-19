import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
    const menuItems = <>
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Home</li></NavLink>
        <NavLink to='/services' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Services</li></NavLink>
        
      {user?.uid ? <>
        <NavLink to='/myreviews' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>My Reviews</li></NavLink>
        <NavLink to='/addservice' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Add Service</li></NavLink>
      </> : <NavLink to='/signin' className={({ isActive }) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Sign In</li></NavLink>}
    </>
    return (
        <div className="navbar no-animation">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu text-secondary menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
                <Link to='/'>
                    <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-8 menu-horizontal px-1 text-secondary text-lg">
           {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
          {user?.uid ? 
      <button onClick={logOut} className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize">Sign Out</button>
    : <Link to='/signup'>
        <button className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize">Sign Up</button>
    </Link>}
  </div>
</div>
    );
};

export default Navbar;