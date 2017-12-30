import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from './containers/Root';
import { createBoard, addList, deleteList, deleteBoard, addCard, deleteCard } from './actions';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(createBoard('Test Board'));
store.dispatch(createBoard('Test Board 2'));
store.dispatch(deleteBoard('board0'));
store.dispatch(addList('Groceries', 'board1'));
store.dispatch(addList('Apples', 'board1'));
store.dispatch(deleteList('list0', 'board1'));
store.dispatch(addCard('Groceries', 'list1'));
store.dispatch(addCard('Apples', 'list1'));
store.dispatch(deleteCard('card0', 'list1'));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
