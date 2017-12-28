import { ADD_LIST } from '../actions';

const lists = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case ADD_LIST:
      return state;
    default:
      return state;
  }
};

export default lists;
