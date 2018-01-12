import store from './store';
import { createBoard, addList, addCard } from './actions';

// Iniital setup to show some sample data
store.dispatch(createBoard('Home'));
store.dispatch(createBoard('Work'));
store.dispatch(addList('Groceries', 'board0'));
store.dispatch(addList('Chores', 'board0'));
store.dispatch(addList('Budget', 'board1'));
store.dispatch(addCard('Eggs', 'list0'));
store.dispatch(addCard('Milk', 'list0'));
store.dispatch(addCard('Bread', 'list0'));
store.dispatch(addCard('Clean Bathroom', 'list1'));
store.dispatch(addCard('Mop Floors', 'list1'));
store.dispatch(addCard('Estimate Costs', 'list2'));
store.dispatch(addCard('File Reports', 'list2'));
