import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { Navigate } from 'react-router-dom';

const DefaultLayout = () => {
    const user = useAppSelector((state) => state.auth.user);

    if (user === null) {
        return <Navigate replace to={'/'} />;
    }

    return (
        <>
            <Outlet />
        </>
    );
};

export default DefaultLayout;
