import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store';
import getRoutes from './routes';

const initialState = {};
const store = configureStore(initialState, undefined, false);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router history={history}>
      {getRoutes(store)}
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
