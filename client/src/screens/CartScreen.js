import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addToCart, removeFromCart} from '../actions/cartActions';


const CartScreen = ({match, location, history}) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    
    const [cartAmount, setCartAmount] = useState(0);

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const userLogin = useSelector(state => state.userLogin);
    const {cartItems} = cart; 
    const {userInfo} = userLogin;
    
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
        subTotal();
    }, [dispatch, cartItems]);

    const subTotal = () => {
        let x = 0;
        cartItems.map((item) => {
            x = x + item.qty * item.price;
        });
        setCartAmount(x);
    }

    
    const renderEmpty = () => {
        return (
            <div>
                Your cart is empty!
            </div>
        )
    };

    const renderQuantity = (item) => {
        const quantityArray = [...Array(item.countInStock).keys()];
        return (
            <form>
                
                <div className="select-btn">  
                    <span className="title">Quantity</span>
                    <select onChange={(e) => dispatch(addToCart(item.product, e.target.value))} value={item.qty}  id="streaming">
                    {quantityArray.map((x) => {
                        return (
                            <option key={x+1} value={x+1}>{x+1} </option>
                        )
                    })}
                  </select>
                </div>
         </form>
        )
    };

    const renderCartItems = (item) => {
        return (
            <div className='cartScreen__products'>
                <img className='cartScreen__image' src={item.image} />
                <div className='cartScreen__products__right'>
                    
                    <p>{item.name}</p>
                    
                   <div className='cartScreen__products__bottom'>
                        <p className='cartScreen__price'>{item.price}$</p>
                        {renderQuantity(item)}
                        <button onClick={() => dispatch(removeFromCart(item.product))}>
                        <img className='cartScreen__delete' src='/images/icons/delete_black_24dp.svg'/>
                    </button>
                   </div>
                    
                </div>
                
                
            </div>
        )
    };

    const checkOutHandller = () => {
        history.push('/shipping');
    };

    return (
        <div className='cartScreen'>
            
            <div className='cartScreen__left'>
            SHOPPING CART
                {cartItems 
                ? cartItems.map((item) => <div key={item.product}>{renderCartItems(item)}</div>) 
                : renderEmpty()}
            </div>
            <div className='cartScreen__right'>
                TOTAL AMOUNT: <span className='cartScreen__right__subtotal'>{cartAmount.toFixed(2)}</span>
                <button onClick={() => checkOutHandller()} className='cartScreen__right__btn'>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default CartScreen;
