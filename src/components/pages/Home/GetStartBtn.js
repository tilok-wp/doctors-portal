import React from 'react';
import { Link } from 'react-router-dom';

const GetStartBtn = () => {
    return (
        <Link to='/' className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</Link>
    );
};

export default GetStartBtn;