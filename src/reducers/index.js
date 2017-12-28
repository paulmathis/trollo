import { combineReducers } from 'redux';
import { CREATE_BOARD, DELETE_BOARD, ADD_LIST, ADD_CARD } from '../actions';

const boards = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        byId: { ...state.byId, [action.id]: { id: action.id, title: action.title } },
        ids: [...state.ids, action.id]
      };
    case DELETE_BOARD:
      const { byId: { [action.id]: deleted, ...byId } } = state;
      const ids = state.ids.filter(id => action.id !== id);

      console.log({ byId, ids });
      return {
        byId,
        ids
      };
    default:
      return state;
  }
};
const lists = (state = { byId: {}, allIds: [] }, action) => {
  return state;
};
const cards = (state = { byId: {}, allIds: [] }, action) => {
  return state;
};

const rootReducer = combineReducers({ boards, lists, cards });

export default rootReducer;
