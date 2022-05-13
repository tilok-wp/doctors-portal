import React from 'react'
import bannerImage from '../../../../assets/images/chair.png'
import GetStartBtn from '../GetStartBtn';

const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-cover">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-100 md:w-[500px]' src={bannerImage} />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <GetStartBtn></GetStartBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;