import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks'; // Assuming you have these hooks set up for Redux

const ProtectedLayout = () => {
    // Access both the user and isAuthenticated flag from the auth state
    //const user = useAppSelector((state) => state.auth.user);
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    // Check for isAuthenticated instead of just user object presence
    if (!isAuthenticated) {
        return <Navigate replace to="/login" />;
    }

    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
        </>
    );
};

export default ProtectedLayout;
