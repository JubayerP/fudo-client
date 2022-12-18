import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, price, _id, img, desc, ratings } = service;
    return (
        <div className='container mx-auto grid grid-cols-3 gap-4 my-20'>
            <div className='col-span-2'>
                <img src={img} className='max-w-lg w-full rounded-lg' alt="" />
                <div className='flex items-center space-x-4 my-5'>
                <DynamicStar rating={ratings} totalStars={5} emptyStarColor={'#e2e8f0'} width='30' height='30' />
                <p className='text-xl text-secondary'>({ratings}.0)</p>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-secondary">{name}</h1>
                    <p className='text-xl text-gray-400 my-6 text-justify'>{desc}</p>
                    <h4 className='text-2xl font-bold text-primary'>Price ${price}</h4>
                </div>
            </div>
            <div className=''>
                
            </div>
        </div>
    );
};

export default ServiceDetails;