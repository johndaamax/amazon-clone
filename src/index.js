import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BasketProvider } from './context/BasketProvider';
import { AuthProvider } from './context/AuthProvider';
import { ProductsProvider } from './context/ProductsProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BasketProvider>
      <AuthProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </AuthProvider>
    </BasketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals