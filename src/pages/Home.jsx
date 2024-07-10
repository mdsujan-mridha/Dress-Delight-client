import React from 'react';
import Hero from '../components/Hero';
import NewArival from '../components/NewArival';

const Home = () => {
    return (
        <div className='px-0'>
            <Hero />
            <div className='px-12'>
                <NewArival />
            </div>
        </div>
    );
};

export default Home;