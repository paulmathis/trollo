import { CREATE_BOARD, DELETE_BOARD } from '../actions';

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
      return {
        byId,
        ids
      };
    default:
      return state;
  }
};

export default boards;
