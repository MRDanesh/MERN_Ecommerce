import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../actions/userActions';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');

    const dispatch = useDispatch();


    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div className='loginScreen'>
            <div className='loginScreen__form'>
                <div className='loginScreen__form__header'>
                    SIGN IN
                </div>
            
                <p className='loginScreen__form__title'>Email:</p>
                <input
                autoComplete='off'
                className='loginScreen__form__input'
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                />

                <p className='loginScreen__form__title'>Password:</p>
                <input
                autoComplete='off'
                className='loginScreen__form__input'
                name="email"
                type="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                />
                <p>Are you a new user? <Link to='/register'>Register now</Link></p>
                <button 
                    className='loginScreen__form__btn'
                    onClick={onFormSubmit}
                >
                    Sing In
                </button>
            
            </div>
        </div>
    )
}

export default LoginScreen
