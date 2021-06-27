import React from 'react';
import {Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import history from './history';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  return(
    <Router history={history}>
      <div className='container'>
      <Header/>
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
      </main>
      <Footer/>
      </div>
    </Router>
    
  );
};

export default App;
