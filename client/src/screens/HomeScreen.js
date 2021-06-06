import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Product from '../components/Product';

const HomeScreen = () => {
    const source = axios.CancelToken.source();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data);
        }
        fetchProducts();
        return () => {
            source.cancel()
        }
    });

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
