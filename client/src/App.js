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

const App = () => {
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
      </main>
      <Footer/>
      </div>
    </Router>
    
  );
};

export default App;
