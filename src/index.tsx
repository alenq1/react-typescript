import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './components/App';
import { store } from './store/store';
import { Provider } from 'react-redux';

import { theme } from "./theme/default";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        
          <App />
        
      </BrowserRouter>
    </Provider>    
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
