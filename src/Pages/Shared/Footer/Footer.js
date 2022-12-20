import React from 'react';
import logo from '../../../assets/logo.png';

const Footer = () => {
    const date = new Date();
    return (
        <footer >
            <div className="footer p-10 bg-base-100 text-base-content border-t-2 border-primary">
            <div>
    <img src={logo} alt="" />
  </div> 
  <div className='text-secondary text-lg'>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='text-secondary text-lg'>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='text-secondary text-lg'>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
            </div>
  </div>
            
            <div>
    <p className='text-sm font-semibold text-secondary text-center my-2'>Copyright © {date.getFullYear()} - All right reserved by <span className='text-primary'>Fudo</span></p>
  </div>
</footer>
    );
};

export default Footer;