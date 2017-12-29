import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from './containers/Root';
import { createBoard, addList } from './actions';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(createBoard('Test Board'));
store.dispatch(addList('Groceries', '1'));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
