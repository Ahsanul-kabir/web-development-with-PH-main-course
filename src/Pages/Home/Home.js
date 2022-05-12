import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <Care />
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;