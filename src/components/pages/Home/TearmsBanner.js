import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import GetStartBtn from './GetStartBtn';

const TearmsBanner = () => {
    return (
        <section className='container mx-auto py-10'>
            <div className='flex justify-center items-center'>
                <div className='flex-1'>
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl mx-auto" />

                </div>
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <GetStartBtn></GetStartBtn>
                </div>
            </div>
        </section>
    );
};

export default TearmsBanner;