import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../shared/Loding/Loding';

const RequirAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'

    if (loading) {
        return <Loding></Loding>
    }

    if (!user) {
        return navigate(from, { replace: true })
    }
    return children;
};

export default RequirAuth;