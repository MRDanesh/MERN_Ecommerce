import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {PayPalButton} from 'react-paypal-button-v2';

import {getOrderDetails, payOrder} from '../actions/orderActions';
import {ORDER_PAY_RESET} from '../constants/orderConstants';


const OrderScreen = ({history, match}) => {
    const orderId = match.params.id;

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const orderCreate = useSelector(state => state.orderCreate);
    const orderPay = useSelector(state => state.orderPay);

    const {cartItems, shippingAddress, paymentMethod} = cart;
    const {sucess, loading, order} = orderCreate;
    const {loading: loadingPay, sucess: sucessPay} = orderPay;

    const [itemsPrice, setItemsPrice] = useState(0);
    const [sdkReady, setSdkReady] = useState (false);
    const [paypalLoaded, setPaypalLoaded] = useState (false);

    

    const successPaymentHandler = (paymentResult) => {
        dispatch (payOrder(orderId, paymentResult));
    }

    useEffect(() => {

        const addPayPalScript = async () => {
            const {data: clientId} = await axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };

        if (!order || sucessPay) {
            dispatch({type: ORDER_PAY_RESET});
            dispatch(getOrderDetails(orderId));
        } else if (!order.isPaid) {
            if(!window.paypal){
                addPayPalScript();
            }
        } else {
            setSdkReady(true);
        }

    }, [dispatch, orderId, sucessPay, order]);

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
            <form className='placeOrderScreen__right'>
                <div className='placeOrderScreen__right__title'>
                    ORDER SUMMARY
                </div>
                <p>Items: {itemsPrice.toFixed(2)}$</p>
                <p>Shipping: {20}$</p>
                <p>Tax: {0.13*itemsPrice.toFixed(2)}$</p>
                <p>Total: {(1.13*itemsPrice + 20).toFixed(2)}$</p>
                {order ? <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                /> : null}
            </form>
        </div>
    )
}

export default OrderScreen;
