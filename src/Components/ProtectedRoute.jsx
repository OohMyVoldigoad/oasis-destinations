import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('tokenOasis-Destination');
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const storedProfile = localStorage.getItem('profile');
        if (storedProfile) {
            try {
                setProfile(JSON.parse(storedProfile));
            } catch (error) {
                console.error('Error parsing profile JSON', error);
            }
        }
    }, []);

    if (!token) {
        return <Navigate to="/Login" />;
    }

    return children;
};

export default ProtectedRoute;
