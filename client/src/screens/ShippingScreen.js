import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {saveShippingAddress} from '../actions/cartActions';

const ShippingScreen = ({match, location, history}) => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartInfo, shippingAddress} = cart;

    const [address, setAddress] = useState(shippingAddress ? shippingAddress.address : '');
    const [city, setCity] =useState(shippingAddress ? shippingAddress.city : '');
    const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode : '');
    const [country, setCountry] =useState(shippingAddress ? shippingAddress.country : '');


    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address, city, postalCode, country}));

        history.push('/payment');
    };


    return (
        <div className='loginScreen'>
            <form onSubmit={onFormSubmit} className='loginScreen__form'>
                <div className='loginScreen__form__header'>
                    SHIPPING
                </div>
            
                <p className='loginScreen__form__title'>Address:</p>
                <input
                autoComplete='off'
                className='loginScreen__form__input'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required 
                />

                <p className='loginScreen__form__title'>City:</p>
                <input
                autoComplete='off'
                className='loginScreen__form__input'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required 
                />
                
                <p className='loginScreen__form__title'>Postal Code:</p>
                <input
                autoComplete='off'
                className='loginScreen__form__input'
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required 
                />

                <p className='loginScreen__form__title'>Country:</p>
                <input
                autoComplete='off'
                className='loginScreen__form__input'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required 
                /> 


                <button 
                    className='loginScreen__form__btn'
                >
                    Continue
                </button>
            
            </form>
        </div>
    )
}

export default ShippingScreen
