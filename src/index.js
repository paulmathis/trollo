import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from './containers/Root';
import { createBoard, deleteBoard } from './actions';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(createBoard('Test Board'));
store.dispatch(createBoard('Test Board 2'));
store.dispatch(deleteBoard('board1'));

console.log(store.getState());

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
