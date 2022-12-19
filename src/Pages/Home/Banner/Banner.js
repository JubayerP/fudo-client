import React from 'react';
import banner from '../../../assets/banner/banner.jpg';
const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-10 lg:py-0 py-20 container mx-auto items-center lg:h-screen h-full'>
            <div className='mb-10 lg:mb-0'>
                <h1 className="lg:text-7xl text-5xl font-bold text-secondary lg:leading-[100px] leading-[70px]">
                Order Your Food & Enjoy The Taste
                </h1>
                <p className='text-xl font-normal my-6 text-gray-500'>
                    Hey! I'am Jubayer Hossain. I provide Food delivery over the USA States.
                </p>
                <button className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">See Services</button>
            </div>
            <div>
                <img src={banner} className='rounded-2xl' alt="" />
            </div>
        </div>

    );
};

export default Banner;