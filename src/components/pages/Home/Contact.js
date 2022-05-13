import React from 'react';
import bgImgae from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='py-24' style={{
            background: `url(${bgImgae})`
        }}>
            <div className='container mx-auto px-3'>
                <h3 className='text-4xl text-center text-white'> <strong className='text-xl text-primary block mb-2'>Contact Us</strong> Stay connected with us</h3>
                <form action="" className='w-full md:w-1/3 mx-auto mt-8'>
                    <input type="email" placeholder="Email Address" className="block mb-3 input input-bordered w-full" />
                    <input type="test" placeholder="Subject" className="block mb-3 input input-bordered w-full" />
                    <textarea type="textarea" placeholder="Bio" className="block mb-3 input input-bordered w-full h-40 resize-none"></textarea>
                    <div className='text-center'>
                        <input type="submit" value='Submit' className='btn btn-primary px-8 text-white font-bold mt-5' />

                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;