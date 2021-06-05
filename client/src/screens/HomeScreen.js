import React from 'react';

import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product._id} className='products'>
                    <Product product={product} />
                </div>  
            ))}
        </div>
    )
};

export default HomeScreen
