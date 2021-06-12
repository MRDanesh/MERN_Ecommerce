import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return(
    <BrowserRouter>
      <div className='container'>
      <Header/>
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
      </main>
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
};

export default App;
