import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listProductDetails} from '../actions/productActions';


const ProductScreen = ({match, history}) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const {loading, product, error} = productDetails;
    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, []);

    const renderQuantity = () => {
        const quantityArray = [...Array(product.countInStock).keys()];
        return (
            <form>
                <span className="title">Quantity</span>
                <div className="select-btn">  
                  <select onChange={(e) => setQty(e.target.value)} id="streaming">
                    {quantityArray.map((x) => {
                        return (
                            <option key={x+1} value={x+1}>{x+1}</option>
                        )
                    })}
                  </select>
                </div>
         </form>
        )
    };

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div className='productScreen'>
            <div className='productScreen__imgContainer'>
                <img alt='' className='productScreen__imgContainer__img' src={product.image} />
            </div>
            <div className='productScreen__desContainer'>
                <p className='productScreen__desContainer__description'>
                    Description: {product.description}
                </p>
                <p className='productScreen__desContainer__price'>
                    Price: {product.price}$
                </p>
            </div>
            <div className='productScreen__cartContainer'>
                <div className='productScreen__cartContainer__status'>
                    Status:{product.countInStock 
                    ? renderQuantity()
                    : 'Out of Stock'}
                </div>
                <button onClick={() => addToCartHandler()} className='productScreen__cartContainer__button'>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductScreen
