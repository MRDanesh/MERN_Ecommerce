import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart);
    const {cartItems, shippingAddress, paymentMethod} = cart;

    return (
        <div className='placeOrderScreen'>
            <div className='placeOrderScreen__left'>
                <div className='placeOrderScreen__left__shipping'>
                    <p className='placeOrderScreen__left__shipping__title'>
                        SHIPPING ADDRESS
                    </p>
                    <p className='placeOrderScreen__left__shipping__detail'>
                        {shippingAddress.address}
                    </p>
                </div>

                <div className='placeOrderScreen__left__payment'>
                    <p className='placeOrderScreen__left__payment__title'>
                        PAYMENT METHOD
                    </p>
                    <p className='placeOrderScreen__left__payment__detail'>
                        {paymentMethod}
                    </p>
                </div>

                <div className='placeOrderScreen__left__orders'>
                    <p className='placeOrderScreen__left__orders__title'>
                        ORDERS
                    </p>
                    
                </div>
            </div>
            <div className='placeOrderScreen__right'>
                <div className='placeOrderScreen__right__title'>
                    ORDER SUMMARY
                </div>
                <p>Items: {}</p>
                <p>Shipping: {}</p>
                <p>Tax: {}</p>
                <p>Total: {}</p>
                <button>PLACE ORDER</button>
            </div>
        </div>
    )
}

export default PlaceOrderScreen
