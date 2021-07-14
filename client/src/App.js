import React, {useState} from 'react';
import {Router, Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import history from './history';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const App = () => {
  console.log('rendered!');
  const [open, setOpen] = useState(false);

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const PrivateRoutes = ({authed, component: Component, path, ...rest}) => {
    return (
      <Route
        {...rest}
        path = {path}
        render = { (props) => 
          authed ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: null}}/>
        }
      />
    )

  }



  return(
    <Router history={history}>
      <div className='container'>
      <Header open={open} setOpen={setOpen}/>
      <main>
        <Route path='/' exact>
          <HomeScreen open={open} setOpen={setOpen}/>
        </Route>
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <PrivateRoutes path='/shipping' authed={userInfo} component={ShippingScreen} />
        <PrivateRoutes path='/profile' authed={userInfo} component={ProfileScreen}/>
        <PrivateRoutes path='/confirmation' authed={userInfo} component={ConfirmationScreen} />
        <PrivateRoutes path='/payment' authed={userInfo} component={PaymentScreen} />
        <PrivateRoutes path='/placeorder' authed={userInfo} component={PlaceOrderScreen} />
        <PrivateRoutes path='/order/:id' authed={userInfo} component={OrderScreen} />
      </main>
      <Footer/>
      </div>
    </Router>
    
  );
};

export default App;
