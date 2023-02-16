import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginState } from '../../constants/initialState';
import { locale } from '../../constants/localizations';
import { GlobalContext } from '../../GlobalContext';
import { login, putAccessToken } from '../../utils/network-data';

const Login = () => {
    const navigate = useNavigate();
    const { state } = useContext(GlobalContext);
    const { lang } = state;
    const [input, setInput] = useState(loginState);

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(input).then((res) => {
            putAccessToken(res.data.accessToken);
            alert('Login successfull');
            navigate('/');
        });
    };

    return (
        <section className='login-page'>
            <h2>{locale[lang].loginPageTitle}</h2>
            <div className='input-login'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    value={input.email}
                    onChange={handleChange}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    value={input.password}
                    onChange={handleChange}
                />
                <button type='button' onClick={handleLogin}>
                    Login
                </button>
            </div>
            <p>
                {locale[lang].loginSentences}{' '}
                <a href='/auth/register'>{locale[lang].loginAction}</a>
            </p>
        </section>
    );
};

export default Login;
