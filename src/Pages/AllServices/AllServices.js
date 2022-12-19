import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Spinner from '../Shared/Spinner/Spinner';
import AllService from './AllService';

const AllServices = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('https://food-sense-server.vercel.app/Allservices')
        .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
        })
    }, [])
    return (
        <div className='container mx-auto my-20'>
            {
                loading 
                    ?
                    <Spinner />
                    :
                
                <>
                <h2 className="text-5xl font-bold text-primary mb-10">
            Delicious Services For You
            </h2>

            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    services.map(service => <AllService key={service._id} service={service} />)
                }
            </div>
            </>}
        </div>
    );
};

export default AllServices;