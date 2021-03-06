import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import {userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateReducer} from './reducers/userLoginReducer';
import {orderDetailsReducer, orderCreateReducer, orderPayReducer, myOrdersListReducer} from './reducers/orderReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister:  userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrdersList: myOrdersListReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') 
?JSON.parse(localStorage.getItem('cartItems')) 
: [];

const userInfoFromStorage = localStorage.getItem('userInfo') 
?JSON.parse(localStorage.getItem('userInfo')) 
: null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
?JSON.parse(localStorage.getItem('shippingAddress')) 
: null;

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') 
?JSON.parse(localStorage.getItem('paymentMethod')) 
: null;


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage
    },
    userLogin: {
        userInfo: userInfoFromStorage    
    }
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
