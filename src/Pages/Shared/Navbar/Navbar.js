import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
    const menuItems = <>
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Home</li></NavLink>
        <NavLink to='/services' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Services</li></NavLink>
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Home</li></NavLink>
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Home</li></NavLink>
        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-primary' : 'hover:text-primary'}`}><li>Home</li></NavLink>
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
    <Link to='/'>
        <button className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white">Sign In</button>
    </Link>
  </div>
</div>
    );
};

export default Navbar;