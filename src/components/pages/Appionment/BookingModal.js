import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user, loding, error] = useAuthState(auth)

    const { _id, name, slots } = treatment
    const formatDate = format(date, 'PP')
    const handleFormSubmit = event => {
        event.preventDefault();
        const slot = event.target.timeSlot.value
        // console.log(_id, name, slot)

        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formatDate,
            slot,
            paitentName: user.displayName,
            paitentEmail: user.email,
            phone: event.target.phone.value

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // To close modal emty treatment value
                if (data.success) {
                    toast.success(`Booking successful submit. Time:  ${formatDate} at ${slot} `)

                } else {
                    toast.error(`Already have this appointment . Time:  ${data.booking?.date} at ${data.booking?.slot} `)

                }
                refetch()
                setTreatment(null)
            })


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
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Write phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn bg-gradient-to-r from-secondary to-primary text-white" />

                    </form>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;