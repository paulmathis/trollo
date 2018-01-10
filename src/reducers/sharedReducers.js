// @flow
import type { Action } from '../actions';

type State = {
  byId: {
    [key: string]: any
  },
  ids: Array<string>
};

// Take in state and action containing the key of the item to delete
// Sepearte out that object using the srpead operator and then return the rest back to state
export const deleteItem = (state: State, action: Action) => {
  const { byId: { [action.id]: deleted, ...byId } } = state;
  const ids = state.ids.filter(id => action.id !== id);
  return {
    byId,
    ids
  };
};
