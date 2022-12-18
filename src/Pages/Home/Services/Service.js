import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, _id, img, desc, ratings } = service;
    return (
        <div className='max-w-sm rounded-lg shadow-lg'>
            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <div className=''>
                    <PhotoView src={img} className=''>
                    <img src={img} className='rounded-lg w-full cursor-zoom-in' alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>
            <div className='p-4'>
                <div className='flex items-center space-x-4 my-2'>
                <DynamicStar rating={ratings} totalStars={5} emptyStarColor={'#e2e8f0'} width='20' height='20' />
                <p className='text-xl text-secondary'>({ratings}.0)</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-secondary my-3">{name}</h3>
                    <p className='text-slate-400 text-lg my-3'>{desc.slice(0, 100)}...</p>

                    <div className='flex justify-between items-center'>
                        <h4 className='text-2xl font-bold text-secondary'>${price}</h4>
                        <Link to={`/services/${_id}`}>
                        <button className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;