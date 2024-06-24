import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('tokenOasis-Destination');

    if (!token) {
        return <Navigate to="/Login" />;
    }

    return children;
};

export default ProtectedRoute;
