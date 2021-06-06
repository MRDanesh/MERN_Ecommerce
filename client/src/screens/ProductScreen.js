import React, {useState, useEffect} from 'react';
import axios from 'axios';


const ProductScreen = ({match}) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        };
        fetchProduct();
    });

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
                <p className='productScreen__cartContainer__status'>Status:{`In Stock`}</p>
                <button className='productScreen__cartContainer__button'>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductScreen
