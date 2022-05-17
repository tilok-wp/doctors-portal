import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyAppoinments = () => {
    const [appoinments, setAppoinments] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?email=${user.email}`
            fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log(res)
                    if (res.status === 401 || res.status === 403) {
                        toast.error('Forbidden you have not access this!')
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppoinments(data)
                })
        }
    }, [user])

    return (
        <div>
            <h3 className='text-3xl font-bold text-center mb-5'>MyAppoinments {appoinments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.paitentName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatmentName}</td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;