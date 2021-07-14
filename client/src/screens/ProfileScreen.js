import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import { getUserDetails, updateUserDetails } from '../actions/userActions';
import {getListMyOrders} from '../actions/orderActions';
import Message from '../components/Message';


const ProfileScreen = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const userUpdate = useSelector((state) => state.userUpdate);
    const {userInfo} = userLogin;

    const myOrdersList = useSelector((state) => state.myOrdersList);
    const {orders} = myOrdersList;
    

    const [email, setEmail] = useState(userInfo ? userInfo.email : '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState(userInfo ? userInfo.name : '');
    const [error, setError] = useState(null);

    useEffect(() =>  {
        dispatch(getUserDetails());
        dispatch(getListMyOrders());
    },[dispatch]);

    const onFormSubmit = () => {
        if (email && password && confirmPassword && name){
            if (password === confirmPassword) {
                dispatch(updateUserDetails(name, email, password));
            } else {
                setError('Password is not match!')
            }
        } else {
            setError('You need to fill form completely!')
        }
    }

    const renderOrders = (orders) => {
        
    }

    return (
        <div className='profileScreen'> 
            <div className='profileScreen__details'>
                PROFILE DETAILS
                {error ? <Message error={error}/> : null}
                {userUpdate.error ? <Message error={userUpdate.error}/> : null}
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
            <div className = 'profileScreen__orders'>
                MY ORDERS

                <div>
                    <div className = 'profileScreen__orders__header main '>
                        <p className='profileScreen__orders__header__components id main'>ID</p>
                        <p className='profileScreen__orders__header__components main'>DATE</p>
                        <p className='profileScreen__orders__header__components main'>TOTAL</p>
                        <p className='profileScreen__orders__header__components main'>DELIVERED</p>
                    </div>

                    
                        {orders 
                        ? orders.map((order) => {
                            return (
                                <div className='profileScreen__orders__header'>
                                    
                                    <p className='profileScreen__orders__header__components id'>{order._id}</p>
                                    <p className='profileScreen__orders__header__components'>{order.createdAt.substring(0,10)}</p>
                                    <p className='profileScreen__orders__header__components'>{order.totalPrice}$</p>
                                    <p className='profileScreen__orders__header__components'>{order.isDelivered ? <i class="check green icon"></i> : <i class="times red icon"></i>}</p>
                                    <div className='profileScreen__orders__header__components' ><Link className='details__button' to='/myorders/id'> DETAILS</Link></div>
                                </div>
                            )
                        })
                        : null }
                    
                    

                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
