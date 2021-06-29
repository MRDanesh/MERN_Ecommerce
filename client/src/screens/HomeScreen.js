import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Product from '../components/Product';
import {listProducts} from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ModalAlert from '../components/Modals/ModalAlert';
import MyModal from '../components/Modals/MyModal';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, products, error} = productList;

    useEffect(() => {
        dispatch(listProducts());   
    },[]);

    const renderProducts = () => {
        return(
            <div className='homeScreen'>
                <h2 className='products__header'>Products</h2>
                <div className='homeScreen__inner'>
                    {products.map((product) => (
                        <div key={product._id} className='products'>
                            <Product product={product} />
                        </div>  
                    ))}
                </div>
                
            </div>
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
