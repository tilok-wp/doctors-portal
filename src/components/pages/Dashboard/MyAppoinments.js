import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppoinments = () => {
    const [appoinments, setAppoinments] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?email=${user.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setAppoinments(data))
        }
    }, [user])

    return (
        <div>
            <h3>MyAppoinments {appoinments.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

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