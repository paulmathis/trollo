// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Root from './containers/Root';
import { createBoard, addList, addCard } from './actions';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(createBoard('Test Board'));
store.dispatch(createBoard('Test Board 2'));
store.dispatch(addList('Test List', 'board0'));
store.dispatch(addList('Test List 2', 'board0'));
store.dispatch(addList('Test List 3', 'board1'));
store.dispatch(addCard('Test Card', 'list0'));
store.dispatch(addCard('Test Card 3', 'list0'));
store.dispatch(addCard('Test Card 2', 'list2'));

var rootId = document.getElementById('root');
if (rootId == null) {
  throw new Error('no root id element');
}

ReactDOM.render(<Root store={store} />, rootId);
registerServiceWorker();
