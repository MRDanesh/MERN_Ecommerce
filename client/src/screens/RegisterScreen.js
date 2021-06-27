import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { register } from '../actions/userActions';
import Message from '../components/Message';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [err, setErr] = useState(null);

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const {error, loading, userInfo} = userRegister;
    //console.log(error);
    const onFormSubmit = () => {
        if (email && password && name) {
            dispatch(register(name, email, password)).then(
                () => setErr(error)
            );
            if(error) {
                setErr(error);
            }
        } else {
            setErr('You should complete form!');
        }
    };

    

   
    return (
        <>
            {err ? <Message error={err}/> : null}
            <div className='loginScreen'>
                <div className='loginScreen__form'>
                    <div className='loginScreen__form__header'>
                        SIGN UP
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

                    <p className='loginScreen__form__title'>Username:</p>
                    <input
                    autoComplete='off'
                    className='loginScreen__form__input'
                    name="email"
                    type="email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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

                    <p className='loginScreen__form__title'>Confirm Password:</p>
                    <input
                    autoComplete='off'
                    className='loginScreen__form__input'
                    name="email"
                    type="email"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                    />

                    <p>Already have an account? <Link to='/login'>Login here</Link></p>
                    
                    <button 
                        className='loginScreen__form__btn'
                        onClick={onFormSubmit}
                    >
                        Register
                    </button>
                    
                </div>
            </div>
        </>
    )
}

export default RegisterScreen
