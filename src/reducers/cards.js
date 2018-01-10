// @flow

import { ADD_CARD, DELETE_CARD } from '../actions';
import { deleteItem } from './sharedReducers';
import type { Action } from '../actions';

type State = {
  byId: {
    [key: string]: {
      id: string,
      name: string,
      list: string
    }
  },
  ids: Array<string>
};

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

const cards = (state: State = { byId: {}, ids: [] }, action: Action) => {
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
