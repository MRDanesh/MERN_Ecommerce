import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {createOrder} from '../actions/orderActions';

const PlaceOrderScreen = ({history}) => {
    const cart = useSelector(state => state.cart);
    const orderCreate = useSelector(state => state.orderCreate);

    const {cartItems, shippingAddress, paymentMethod} = cart;
    const {sucess, loading, order} = orderCreate;
    
    const [itemsPrice, setItemsPrice] = useState(0);
    
    useEffect(() => {
        let x = 0;
        cartItems.map((item) => {
            x = x + item.price * item.qty;
        });
        setItemsPrice(x);
        if(sucess) {
            history.push(`/order/${order._id}`);
        }
    }, [sucess]);

    const dispatch = useDispatch();

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createOrder({
                orderItems: cartItems,
                shippingAddress,
                paymentMethod,
                itemsPrice: itemsPrice.toFixed(2),
                shippingPrice: 20,
                taxPrice: (0.13*itemsPrice).toFixed(2),
                totalPrice: (1.13*itemsPrice + 20).toFixed(2)
            })
        );
    }


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
            <form onSubmit={onHandleSubmit} className='placeOrderScreen__right'>
                <div className='placeOrderScreen__right__title'>
                    ORDER SUMMARY
                </div>
                <p>Items: {itemsPrice.toFixed(2)}$</p>
                <p>Shipping: {20}$</p>
                <p>Tax: {0.13*itemsPrice.toFixed(2)}$</p>
                <p>Total: {(1.13*itemsPrice + 20).toFixed(2)}$</p>
                <button>PLACE ORDER</button>
            </form>
        </div>
    )
}

export default PlaceOrderScreen;
