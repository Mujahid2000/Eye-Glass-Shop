import React from 'react';
import Banner from '../Banner';
import Stats from '../Stats';
import ModelCard from '../ModelCard';
import AboutUs from '../AboutUs';

const Home = () => {
    return (
        <div className='mt-14 '>
            <Banner/>
            <Stats/>
            <ModelCard/>
            <AboutUs/>
        </div>
    );
};

export default Home;