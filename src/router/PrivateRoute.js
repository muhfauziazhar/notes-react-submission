import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../Layout';
import { GlobalContext } from '../GlobalContext';

const PrivateRoute = ({ children }) => {
    const { state } = useContext(GlobalContext);
    if (state.isLogin) {
        return <Layout>{children}</Layout>;
    } else {
        return <Navigate to={'/auth/login'} />;
    }
};

export default PrivateRoute;
