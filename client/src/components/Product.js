import React from 'react';

const Product = ({product}) => {
    return (
        <div className='products__item'>
            <img className='products__item__image' src={product.image}/>
            <p className='products__item__description'>{product.description}</p>
            <p className='products__item__price'>{product.price}$</p>
        </div>
    )
};

export default Product;
