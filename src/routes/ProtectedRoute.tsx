import React, { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks'; // Assuming you have these hooks set up for Redux

const ProtectedRoute = () => {
    // Access both the user and isAuthenticated flag from the auth state
    //const user = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    );
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login'), { replace: true };
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
        </>
    );
};

export default ProtectedRoute;
