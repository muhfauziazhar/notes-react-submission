import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { locale } from '../constants/localizations';
import { GlobalContext } from '../GlobalContext';
import { getUserLogged, putAccessToken } from '../utils';

const Navigation = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const { state, handleFunction } = useContext(GlobalContext);
    const { isLogin, setIsLogin } = state;
    const { lang } = state;
    const { handleTheme, handleLang } = handleFunction;

    useEffect(() => {
        isLogin && getUserLogged().then((res) => setUser(res.data.name));
    }, [isLogin]);

    const handleLogout = () => {
        setUser('');
        setIsLogin(false);
        putAccessToken('');
        navigate('/auth/login');
    };

    return (
        <header>
            <h1>
                <Link to={'/'}>{locale[lang].navTitle}</Link>
            </h1>
            {isLogin && (
                <nav className='navigation'>
                    <ul>
                        <li>
                            <Link to={'/archives'}>
                                {locale[lang].navArchive}
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}

            <button
                className='toggle-locale'
                type='button'
                onClick={handleLang}
            >
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16zm6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47-.31-.35-.6-.72-.86-1.1l-.79-2.37zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5-1.04-3.1 3.1 3.1.92-.92-3.3-3.25.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1v14z'></path>
                    <path fill='none' d='M0 0h24v24H0zm0 0h24v24H0z'></path>
                </svg>
            </button>
            <button
                className='toggle-theme'
                type='button'
                onClick={handleTheme}
            >
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path d='M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z'></path>
                </svg>
            </button>
            {isLogin && (
                <button
                    className='button-logout'
                    type='button'
                    onClick={handleLogout}
                >
                    <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'></path>
                    </svg>{' '}
                    {user}
                </button>
            )}
        </header>
    );
};

export default Navigation;
