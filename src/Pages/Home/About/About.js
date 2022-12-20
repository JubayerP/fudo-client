import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-between items-center'>
            <div className='w-1/2'>
                <img src="https://cdn.shopify.com/s/files/1/0620/0708/3249/files/about-us-1_770x.png?v=1641883037" alt="" />
            </div>
            <div className='lg:w-1/2 w-4/5'>
                <h2 className="text-5xl text-primary font-bold my-6">About Us</h2>
                <p className='text-xl text-secondary leading-10'>food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital</p>

                <Link to='/services'>
                <button className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation mt-6">Explore Services</button>
                </Link>
            </div>
        </div>
    );
};

export default About;