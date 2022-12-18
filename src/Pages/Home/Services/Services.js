import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <div className='container mx-auto my-20'>
            <h2 className="text-5xl font-bold text-primary mb-10">
            Delicious Services For You
            </h2>

            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>

            <div className='text-center mt-10'>
            <button className="btn btn-outline border border-primary text-secondary hover:bg-primary px-12 capitalize rounded-full no-animation">See All</button>
            </div>
        </div>
    );
};

export default Services;