import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { Navigate } from 'react-router-dom';

const DefaultLayout = () => {
    const token = useAppSelector((state) => state.auth.token);

    if (token) {
        return <Navigate replace to={'/'} />;
    }

    return (
        <>
            <Outlet />
        </>
    );
};

export default DefaultLayout;
