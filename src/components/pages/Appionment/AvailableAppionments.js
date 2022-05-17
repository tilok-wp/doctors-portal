import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Booking from './Booking';
import BookingModal from './BookingModal';
import Loding from '../../shared/Loding/Loding'

const AvailableAppionments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const fromatedDate = format(date, 'PP')

    // const [bookings, setBookings] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${fromatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    // }, [fromatedDate])

    const { data: bookings, isLoading, refetch } = useQuery(['available', fromatedDate], () => fetch(`http://localhost:5000/available?date=${fromatedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loding></Loding>
    }

    return (
        <section className='py-40 container mx-auto'>
            <h3 className='text-2xl text-secondary text-center font-semibold' > Available dates for : {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    bookings?.map(item => <Booking
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
                refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppionments;