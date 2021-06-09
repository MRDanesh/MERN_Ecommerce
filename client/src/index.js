import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './scss/main.scss';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

