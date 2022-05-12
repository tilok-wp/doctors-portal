import React from 'react';
import cavity from '../../../../assets/images/cavity.png'
import fluoride from '../../../../assets/images/fluoride.png'
import whitening from '../../../../assets/images/whitening.png'
import SingleService from '../SingleService';

const ServicesSection = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: whitening
        }
    ]
    return (
        <section className='py-24 container mx-auto'>
            <h3 className='text-4xl text-center mb-20'> <strong className='text-xl text-primary block'>OUR SERVICES</strong> Services We Provide</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        services={service}
                    ></SingleService>)
                }
            </div>

        </section>

    );
};

export default ServicesSection;