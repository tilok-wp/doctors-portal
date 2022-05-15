import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Home/Banner/Banner';
import AppionmentBanner from './AppionmentBanner';
import Contact from './Contact';
import InfoSection from './InfoSection/InfoSection';
import ServicesSection from './ServicesSection/ServicesSection';
import TearmsBanner from './TearmsBanner';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <ServicesSection></ServicesSection>
            <TearmsBanner></TearmsBanner>
            <AppionmentBanner></AppionmentBanner>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;