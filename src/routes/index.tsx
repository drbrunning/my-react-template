import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import DefaultLayout from './DefaultLayout';
import ProtectedLayout from './ProtectedLayout';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}
export default AppRoutes;
