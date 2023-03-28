import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Composant/App';
import "@picocss/pico";

import { store } from './redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <App />
  </Provider>
 
);