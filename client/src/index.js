import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'

export const Context = createContext(null)
console.log('host: ', process.env.REACT_APP_API_URL)
console.log(process.env)
ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
