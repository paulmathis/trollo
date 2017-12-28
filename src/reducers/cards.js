import { ADD_CARD } from '../actions';

const cards = (state = { byId: {}, ids: [] }, action) => {
  switch (action.type) {
    case ADD_CARD:
      return state;
    default:
      return state;
  }
};

export default cards;
