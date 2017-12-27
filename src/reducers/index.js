import { combineReducers } from 'redux';
import { CREATE_BOARD, ADD_LIST, ADD_CARD } from '../actions';

const boards = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        byId: { ...state.byId, [action.id]: { id: action.id, title: action.title } },
        ids: [...state.ids, action.id]
      };
    default:
      return state;
  }
};
const lists = (state = [], action) => {
  return state;
};
const cards = (state = [], action) => {
  return state;
};

const rootReducer = combineReducers({ boards, lists, cards });

export default rootReducer;
