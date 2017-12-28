import { CREATE_BOARD, DELETE_BOARD, ADD_LIST } from '../actions';

const boards = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case CREATE_BOARD:
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
    case DELETE_BOARD:
      const { byId: { [action.id]: deleted, ...byId } } = state;
      const ids = state.ids.filter(id => action.id !== id);
      return {
        byId,
        ids
      };
    case ADD_LIST:
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
    default:
      return state;
  }
};

export default boards;
