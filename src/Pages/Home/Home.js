import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Care />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;