import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <Services />
            <About />
            <Discount />
        </div>
    );
};

export default Home;