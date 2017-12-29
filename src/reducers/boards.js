import { CREATE_BOARD, DELETE_BOARD, ADD_LIST } from '../actions';

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

function deleteBoard(state, action) {
  const { byId: { [action.id]: deleted, ...byId } } = state;
  const ids = state.ids.filter(id => action.id !== id);
  return {
    byId,
    ids
  };
}

function addList(state, action) {
  // If board does not exist return state unchanged
  if (!(action.board in state.byId)) return state;

  const previousBoardState = { ...state.byId[action.board] };
  return {
    ...state,
    byId: {
      [action.board]: {
        ...previousBoardState,
        lists: [...previousBoardState.lists, action.id]
      }
    }
  };
}

const boards = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return createBoard(state, action);
    case DELETE_BOARD:
      return deleteBoard(state, action);
    case ADD_LIST:
      return addList(state, action);
    default:
      return state;
  }
};

export default boards;
