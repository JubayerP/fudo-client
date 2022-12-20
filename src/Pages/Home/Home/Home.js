import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
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
            <Contact />
        </div>
    );
};

export default Home;