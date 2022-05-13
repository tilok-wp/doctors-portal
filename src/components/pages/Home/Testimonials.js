import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import CardTestimonial from './CardTestimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            image: people1
        },
        {
            _id: 2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            image: people2
        },
        {
            _id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            location: 'California',
            image: people3
        }
    ]

    return (
        <section className='container mx-auto py-24'>
            <div className='flex justify-between items-center'>
                <h3 className='text-4xl'> <strong className='text-xl text-primary block mb-2'>Testimonial</strong> What Our Patients Says</h3>
                <img src={quote} alt="Quote" className='w-24 md:w-48' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                {
                    reviews.map(item => <CardTestimonial
                        key={item._id}
                        item={item}
                    ></CardTestimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;