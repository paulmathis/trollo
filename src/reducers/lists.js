import { ADD_LIST, DELETE_LIST, ADD_CARD, DELETE_CARD } from '../actions';
import { deleteItem } from './sharedReducers';

function addList(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.id]: {
        id: action.id,
        name: action.name,
        board: action.board,
        cards: []
      }
    },
    ids: [...state.ids, action.id]
  };
}

function addCard(state, action) {
  const previousListState = { ...state.byId[action.list] };
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.list]: {
        ...previousListState,
        cards: [...previousListState.cards, action.id]
      }
    }
  };
}

function deleteCard(state, action) {
  const filtered = state.byId[action.list].cards.filter(card => {
    return card !== action.id;
  });
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.list]: {
        ...state.byId[action.list],
        cards: filtered
      }
    }
  };
}

const lists = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case ADD_LIST:
      return addList(state, action);
    case DELETE_LIST:
      return deleteItem(state, action);
    case ADD_CARD:
      return addCard(state, action);
    case DELETE_CARD:
      return deleteCard(state, action);
    default:
      return state;
  }
};

export default lists;
