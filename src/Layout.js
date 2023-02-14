import React from 'react';
import Navigation from './components/Navigation';

const Layout = ({ children }) => {
    return (
        <div className='app-container'>
            <Navigation />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
