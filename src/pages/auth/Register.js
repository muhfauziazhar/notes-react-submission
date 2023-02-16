import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerState } from '../../constants/initialState';
import { locale } from '../../constants/localizations';
import { GlobalContext } from '../../GlobalContext';
import { register } from '../../utils/network-data';

const Register = () => {
    const navigate = useNavigate();
    const { state } = useContext(GlobalContext);
    const { lang } = state;
    const [input, setInput] = useState(registerState);

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleRegister = (event) => {
        event.preventDefault();
        if (input.password === input.confirmPassword) {
            register(input);
            alert('Register new user successfull');
            navigate('/auth/login');
        } else {
            alert("Password and Confirm Password don't match");
        }
    };

    return (
        <section className='register-page'>
            <h2>{locale[lang].registerPageTitle}</h2>
            <div className='input-register'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={handleChange}
                />
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
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    type='password'
                    name='confirmPassword'
                    value={input.confirmPassword}
                    onChange={handleChange}
                />
                <button type='button' onClick={handleRegister}>
                    Register
                </button>
            </div>
            <p>
                {locale[lang].registerSentences}{' '}
                <a href='/auth/login'>{locale[lang].registerAction}</a>
            </p>
        </section>
    );
};

export default Register;
