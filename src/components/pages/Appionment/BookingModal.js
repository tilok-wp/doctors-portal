import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const [user, loding, error] = useAuthState(auth)

    const { _id, name, slots } = treatment
    const handleFormSubmit = event => {
        event.preventDefault();
        const slot = event.target.timeSlot.value
        console.log(_id, name, slot)
        setTreatment(null)
    }

    return (

        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-8">Booking for: {name}</h3>
                    <form onSubmit={handleFormSubmit} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" placeholder="Type here" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='timeSlot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((content, index) => <option key={index} value={content}>{content}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your full name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Write email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Write phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn bg-gradient-to-r from-secondary to-primary text-white" />

                    </form>
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;