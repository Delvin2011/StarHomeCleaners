import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'; //Provider - parent component that gives access to the store
import {PersistGate} from 'redux-persist/integration/react';
//import './index.css';

import {store,persistor} from './redux/store'; //import store object and pass into provider
import App from './App';

ReactDOM.render(
  <Provider store = {store}> 
    <BrowserRouter>
      <PersistGate persistor = {persistor}></PersistGate>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
*/
