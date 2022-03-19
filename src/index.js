import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';

// console.log(store);

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store} >  */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>
  ,
  document.getElementById('root')
);


