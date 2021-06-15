import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addToCart, removeFromCart} from '../actions/cartActions';


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

    const renderQuantity = (item) => {
        const quantityArray = [...Array(item.countInStock).keys()];
        return (
            <form>
                <span className="title">Quantity</span>
                <div className="select-btn">  
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
            <div className='cartScreen'>
                <img className='cartScreen__image' src={item.image} />
                <p className='cartScreen__name'>{item.name}</p>
                <p className='cartScreen__price'>{item.price}$</p>
                {renderQuantity(item)}
                <button onClick={() => dispatch(removeFromCart(item.product))}>
                    <img className='cartScreen__delete' src='/images/icons/delete_black_24dp.svg'/>
                </button>
                
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
