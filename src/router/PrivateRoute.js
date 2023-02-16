import React from 'react';
import { getAccessToken } from '../utils/network-data';
import { Navigate } from 'react-router-dom';
import Layout from '../Layout';

const PrivateRoute = ({ children }) => {
    if (getAccessToken() === null) {
        return <Navigate to={'/auth/login'} />;
    } else {
        console.log('ke dua', getAccessToken());
        return (
            <>
                <Layout>{children}</Layout>
            </>
        );
    }
};

export default PrivateRoute;
