import React from 'react';
import clockIcon from '../.././../../assets/icons/clock.svg'
import marker from '../.././../../assets/icons/marker.svg'
import phone from '../.././../../assets/icons/phone.svg'
import Info from '../Info/Info';

const InfoSection = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto'>
            <Info heading="Opening Hours" img={clockIcon} description="Lorem Ipsum is simply dummy text of the pri" bgClass='bg-gradient-to-r from-secondary to-primary'  ></Info>
            <Info heading="Visit our location" img={marker} description="Lorem Ipsum is simply dummy text of the pri" bgClass='bg-accent' ></Info>
            <Info heading="Contact us now" img={phone} description="Lorem Ipsum is simply dummy text of the pri" bgClass='bg-gradient-to-r from-secondary to-primary' ></Info>
        </div>
    );
};

export default InfoSection;