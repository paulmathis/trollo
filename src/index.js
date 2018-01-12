// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Root from './containers/Root';
import './sample';
import registerServiceWorker from './registerServiceWorker';

var rootId = document.getElementById('root');
if (rootId == null) {
  throw new Error('no root id element');
}

ReactDOM.render(<Root store={store} />, rootId);
registerServiceWorker();
