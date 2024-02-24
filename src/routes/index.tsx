import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import DefaultLayout from './DefaultLayout';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                {/* Add other protected routes here */}
            </Route>
        </Routes>
    );
}
export default AppRoutes;
