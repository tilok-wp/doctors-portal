import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-menuIcon" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-5">
                <h3 className='text-primary text-4xl font-bold'>Dashboard</h3>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-menuIcon" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Appoinments</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    <li><Link to='/dashboard/history'>My history</Link></li>
                    {admin && <li><Link to='/dashboard/users'>All users </Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;