import React, { useContext, useEffect, useState } from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Modal from '../Modal/Modal';
import ServiceReviews from './ServiceReviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { name, price, _id, img, desc, ratings } = service;

    const [reviews, setReviews] = useState([]);
    const filterReviews = reviews.filter(review => review.serviceId === _id);
    
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
        .then(data => setReviews(data))
    },[])

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
            { user ?
                
                <div className=''>
                <label htmlFor="my-modal-3" className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">Add Your Review</label>
                
                <div className={`${filterReviews.length > 3 ? 'overflow-y-scroll' : 'overflow-hidden'} my-10 space-y-6 h-screen px-2`}>
                    {
                        filterReviews.map(r => <ServiceReviews key={r._id} r={ r} />)
                    }
                </div>
                </div>
                    
                :

                <div className='text-center'>
                    <h3 className="text-2xl font-bold text-secondary mb-10">Want to add a review? Sign In now</h3>
                    <Link to='/signin'>
                    <button className='btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation'>Sign In Now</button>
                    </Link>
                </div>
        }
            <Modal service={service} />
        </div>
    );
};

export default ServiceDetails;