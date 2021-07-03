import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {savePaymentMethod} from '../actions/cartActions';

const PaymentScreen = ({history}) => {

    const [payment, setPayment] = useState('');
    
    const dispatch = useDispatch();
    

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(payment));
        history.push('/placeorder');
    };

    

    return (
        <div className='paymentscreen'>
            <p className='paymentscreen__header'>PAYMENT METHOD</p>
            <div className='paymentscreen__body'>
                <p className='paymentscreen__body__title' >Select Method</p>
                <form onSubmit={onFormSubmit} className='paymentscreen__body__form'>
                    <div className='paymentscreen__body__form__option'>
                        <input onChange={(e) => setPayment(e.target.value)} name='payment' type="radio" id="PayPal" value="PayPal"/>
                        <label>PayPal</label>
                    </div>
                    <div className='paymentscreen__body__form__option'>
                        <input onChange={(e) => setPayment(e.target.value)} name='payment' type="radio" id="VisaCredit" value="VisaCredit"/>
                        <label>Visa Credit</label>
                    </div>
                    <button>Continue</button>
                </form>
            </div>
            
        </div>
    )
}

export default PaymentScreen;
