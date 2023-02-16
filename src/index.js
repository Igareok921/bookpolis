import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import CartState from './context/cart/CartState';


const root = ReactDom.createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <CartState>
      <App />
    </CartState>
  </BrowserRouter>
);



//222222///
