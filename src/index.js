import React from 'react';
// import {createRoot} from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// const root = createRoot(document.getElementById('root'));

// root.render(
  <ShopContextProvider>
    <React.StrictMode>

<App />


</React.StrictMode>
  </ShopContextProvider>
 
      
  
);



