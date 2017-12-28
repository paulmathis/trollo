import { ADD_LIST } from '../actions';

const lists = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            name: action.name,
            board: action.board
          }
        },
        ids: [...state.ids, action.id]
      };
    default:
      return state;
  }
};

export default lists;
