import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getUserDetails, updateUserDetails } from '../actions/userActions';
import Message from '../components/Message';


const ProfileScreen = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const userUpdate = useSelector((state) => state.userUpdate);
    const {userInfo} = userLogin;
    

    const [email, setEmail] = useState(userInfo ? userInfo.email : '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState(userInfo ? userInfo.name : '');

    useEffect(() =>  {
        dispatch(getUserDetails());
    },[dispatch]);

    const onFormSubmit = () => {
        if (email && password && name){
            dispatch(updateUserDetails(name, email, password));
        }
    }

    

    return (
        <div className='productScreen'>
            {userUpdate.error ? <Message error={userUpdate.error}/> : null}
            <div className='productScreen__details'>
                <div className='loginScreen__form'>
                    
                
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
                    
                    <button 
                        className='loginScreen__form__btn'
                        onClick={onFormSubmit}
                    >
                        Update
                    </button>
                        
                </div>
            </div>
            <div className='productScreen__orders'>
                MY ORDERS
            </div>
        </div>
    )
}

export default ProfileScreen;
