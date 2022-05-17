import React from 'react';

const Booking = ({ item, setTreatment }) => {
    const { name, slots } = item
    return (
        <div className="card max-w-lg shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-primary ">{name}</h2>
                <p>{
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-800'>No slot available</span>
                }</p>
                <p>{slots.length} Time {slots.length > 1 ? 'Slots' : 'slot'} available</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(item)} disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-sm btn-primary text-white font-semibold bg-gradient-to-r from-secondary to-primary text-white">Book Appionment</label>
                    {/* <button onClick={() => setTreatment(item)} disabled={slots.length === 0} className="btn btn-primary text-white font-semibold">Book Appionment</button> */}
                </div>
            </div>
        </div>
    );
};

export default Booking;