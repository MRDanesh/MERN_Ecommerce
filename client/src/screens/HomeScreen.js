import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Product from '../components/Product';
import {listProducts} from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, products, error} = productList;

    useEffect(() => {
        dispatch(listProducts());   
    },[]);

    const renderProducts = () => {
        return(
            <>
                <h2>Products</h2>
                {products.map((product) => (
                    <div key={product._id} className='products'>
                        <Product product={product} />
                    </div>  
                ))}
            </>
        )
    };

    return (
        <div>
            {products ? renderProducts():
            loading ? <Loader/> :
            <Message error={error} />}
        </div>
    )
};

export default HomeScreen;
