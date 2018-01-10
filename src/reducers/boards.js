// @flow

import { CREATE_BOARD, DELETE_BOARD, ADD_LIST, DELETE_LIST } from '../actions';
import { deleteItem } from './sharedReducers';
import type { Action } from '../actions';

type State = {
  byId: {
    [key: string]: {
      id: string,
      title: string,
      lists: Array<string>
    }
  },
  ids: Array<string>
};

function createBoard(state, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.id]: {
        id: action.id,
        title: action.title,
        lists: []
      }
    },
    ids: [...state.ids, action.id]
  };
}

function addList(state, action) {
  const previousBoardState = { ...state.byId[action.board] };
  return {
    ...state,
    byId: {
      [action.board]: {
        ...previousBoardState,
        lists: [...previousBoardState.lists, action.id]
      },
      ...state.byId
    }
  };
}

function deleteList(state, action) {
  const filtered = state.byId[action.board].lists.filter(list => {
    return list !== action.id;
  });
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.board]: {
        ...state.byId[action.board],
        lists: filtered
      }
    }
  };
}

const boards = (state: State = { byId: {}, ids: [] }, action: Action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return createBoard(state, action);
    case DELETE_BOARD:
      return deleteItem(state, action);
    case ADD_LIST:
      // If board does not exist return state unchanged
      if (!(action.board in state.byId)) return state;
      return addList(state, action);
    case DELETE_LIST:
      return deleteList(state, action);
    default:
      return state;
  }
};

export default boards;
