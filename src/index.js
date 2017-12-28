import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from './containers/Root';
import { createBoard, deleteBoard, addList } from './actions';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(createBoard('Test Board'));
store.dispatch(createBoard('Test Board 2'));
store.dispatch(deleteBoard('0'));
store.dispatch(addList('Groceries', '1'));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
