import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return(
    <BrowserRouter>
      <div className='container'>
      <Header/>
      <main>
        <HomeScreen/>
      </main>
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
};

export default App;
