import React from 'react'
import bannerImage from '../../../../assets/images/chair.png'

const Banner = () => {
    return (
        <section>
            <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-cover">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-100 md:w-[500px]' src={bannerImage} />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;