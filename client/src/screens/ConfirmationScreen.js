import React, { useEffect } from 'react';
import history from '../history';


const ConfirmationScreen = () => {

    useEffect(() => {
        setTimeout(() => history.push('/profile'), 4000);
        localStorage.removeItem('cartItems');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('paymentMethod');
    });

    return (
        <div className='confirmationScreen'>   
            <div className="ui active dimmer">
                <div className='confirmation'>YOUR ORDER CONFIRMED!</div>
                <div className="ui text loader">You will be Redirected to your profile soon</div>
            </div>
        </div>
       
    )
};

export default ConfirmationScreen;
