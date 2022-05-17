import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth);
        navigate('/login')
    };

    const menuItem = <>
        <li><Link to="/home">Home</Link ></li>
        <li><Link to="/about">About</Link ></li>
        <li><Link to="/appionment">Appionments</Link ></li>
        <li><Link to="/reviews">Reviews</Link ></li>
        <li><Link to="/contact" >Contact Us</Link ></li>
        {user && <li><Link to="/dashboard" >Dashboard</Link ></li>}
        <li> {user ? <button onClick={logout} className="btn btn-active btn-link">Sign Out</button> : <Link to="/login" >Login</Link>}</li>
    </>


    return (
        <header className='sticky top-0 bg-base-100 z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItem
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="dashboard-menuIcon" tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div >
        </header >
    );
};

export default Header;