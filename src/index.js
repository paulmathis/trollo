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
store.dispatch(addList('Test List', 'board1'));
store.dispatch(addCard('Test Card', 'list0'));
store.dispatch(addCard('Test Card 2', 'list2'));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
