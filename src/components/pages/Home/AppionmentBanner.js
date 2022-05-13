import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import GetStartBtn from './GetStartBtn';

const AppionmentBanner = () => {
    return (
        <section className='mt-40' style={{
            background: `url(${appointment})`
        }}>
            <div className='container mx-auto rel'>

                <div className='md:flex justify-center items-center'>
                    <div className='flex-1 mt-[-200px] hidden md:block'>
                        <img src={doctor} />

                    </div>
                    <div className='flex-1 text-white p-5 md:p0'>
                        <strong className='text-primary text-xl'>Appointment</strong>
                        <h2 className="text-5xl font-bold my-3">Make an appointment Today</h2>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <GetStartBtn></GetStartBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppionmentBanner;