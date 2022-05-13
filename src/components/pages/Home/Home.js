import React from 'react';
import Banner from '../Home/Banner/Banner';
import AppionmentBanner from './AppionmentBanner';
import Contact from './Contact';
import Footer from './Footer';
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