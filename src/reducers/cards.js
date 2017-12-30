import { ADD_CARD, DELETE_CARD } from '../actions';
import { deleteItem } from './sharedReducers';

function addList(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.id]: {
        id: action.id,
        name: action.name,
        list: action.list
      }
    },
    ids: [...state.ids, action.id]
  };
}

const cards = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case ADD_CARD:
      return addList(state, action);
    case DELETE_CARD:
      return deleteItem(state, action);
    default:
      return state;
  }
};

export default cards;
