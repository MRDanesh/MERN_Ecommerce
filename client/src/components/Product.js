import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <div className='products__item'>
            <div className='products__item__container'>
                <img className='products__item__container__image' src={product.image} alt='s'/>
                <Link 
                    className='products__item__container__detailsButton button'
                    to={`/product/${product._id}`}
                >
                    Details
                </Link>
                <Link to={`/`} className='products__item__container__cartButton button'>Add to Cart</Link>
            </div>
            
            <p className='products__item__description'>{product.name}</p>
            <p className='products__item__price'>{product.price}$</p>
        </div>
    )
};

export default Product;
