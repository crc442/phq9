import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Routes from './components/Routes';
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    { Routes }
  </Router>
</Provider>, app);

