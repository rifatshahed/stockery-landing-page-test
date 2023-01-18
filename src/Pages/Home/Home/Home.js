import React from 'react';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import Pricing from '../pricing/Pricing';

const Home = () => {
    return (
        <div className='mx-6'>
            <Hero></Hero>
            <Feature></Feature>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;