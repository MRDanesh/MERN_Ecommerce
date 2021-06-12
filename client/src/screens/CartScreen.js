import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../actions/cartActions';


const CartScreen = ({match, location, history}) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch]);

    
    const renderEmpty = () => {
        return (
            <div>
                Empty
            </div>
        )
    };

    const renderCartItems = (item) => {
        return (
            <div className='cartScreen'>
                <img className='cartScreen__image' src={item.image} />
                <p className='cartScreen__name'>{item.name}</p>
                <p className='cartScreen__price'>{item.price}$</p>
                <select className='cartScreen__editBtn' onChange={(e) => console.log(e.target.value)} id="streaming">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
                <img className='cartScreen__delete' src='/images/icons/delete_black_24dp.svg'/>
            </div>
        )
    };


    return (
        <>
            {cartItems 
            ? cartItems.map((item) => <div key={item.product}>{renderCartItems(item)}</div>) 
            : renderEmpty()}
        </>
    )
}

export default CartScreen
