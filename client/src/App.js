import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return(
    <BrowserRouter>
      <div className='container'>
      <Header/>
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
      </main>
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
};

export default App;
