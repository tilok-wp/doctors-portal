import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loding from '../../shared/Loding/Loding';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()))

    const makeAdmin = (email) => {
        // console.log(email)
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('You can not added admin. ')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin make successful!')
                }
            })
    }

    if (isLoading) {
        return <Loding></Loding>
    }

    return (
        <div>
            <h3 className='text-3xl font-bold text-center mb-5'>All Users {users.length} </h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.email}</td>
                                <td> {a.role !== 'admin' && <button onClick={() => makeAdmin(a.email)} className='btn btn-xs'>Make admin</button>}</td>
                                <td><button className='btn btn-xs'>Delete user</button></td>


                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;