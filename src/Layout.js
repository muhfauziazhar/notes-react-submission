import React, { useContext } from 'react';
import Navigation from './components/Navigation';
import { GlobalContext } from './GlobalContext';
import { getLocale, getTheme, putLocale, putTheme } from './utils/network-data';

const Layout = ({ children }) => {
    const { state } = useContext(GlobalContext);

    if (getTheme() === null || getLocale() === null) {
        putTheme('dark');
        putLocale('id');
    }

    return (
        <div className='app-container' data-theme={state.theme}>
            <Navigation />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
