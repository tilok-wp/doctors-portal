import React from 'react';
import Banner from '../Home/Banner/Banner';
import InfoSection from './InfoSection/InfoSection';
import ServicesSection from './ServicesSection/ServicesSection';
import TearmsBanner from './TearmsBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <ServicesSection></ServicesSection>
            <TearmsBanner></TearmsBanner>
        </div>
    );
};

export default Home;