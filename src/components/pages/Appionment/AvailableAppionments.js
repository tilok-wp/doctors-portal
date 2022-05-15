import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppionments = ({ date }) => {
    const [bookings, setBookings] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <section className='py-40 container mx-auto'>
            <h3 className='text-2xl text-secondary text-center font-semibold' > Available dates for : {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    bookings.map(item => <Booking
                        key={item._id}
                        item={item}
                        setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppionments;