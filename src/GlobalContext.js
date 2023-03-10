import { createContext, useEffect, useState } from 'react';
import {
    getAccessToken,
    getLocale,
    getTheme,
    putLocale,
    putTheme,
} from './utils/network-data';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [theme, setTheme] = useState(getTheme);
    const [lang, setLang] = useState(getLocale);
    const [isLogin, setIsLogin] = useState(getAccessToken);

    const handleTheme = () => {
        setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        putTheme(theme);
    }, [theme]);

    const handleLang = () => {
        setLang((prevState) => (prevState === 'id' ? 'en' : 'id'));
    };

    useEffect(() => {
        putLocale(lang);
    }, [lang]);

    const state = {
        theme,
        lang,
        isLogin,
        setIsLogin,
    };

    const handleFunction = {
        handleTheme,
        handleLang,
    };

    return (
        <GlobalContext.Provider value={{ state, handleFunction }}>
            {children}
        </GlobalContext.Provider>
    );
};
