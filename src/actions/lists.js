// @flow

export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export type AddListAction = { type: 'ADD_LIST', name: string, board: string, id: string };
export type DeleteListAction = { type: 'DELETE_LIST', board: string, id: string };

let id = 0;
export const addList = (name: string, board: string): AddListAction => {
  return {
    type: ADD_LIST,
    name,
    board,
    id: `list${id++}`
  };
};

export const deleteList = (id: string, board: string): DeleteListAction => {
  return {
    type: DELETE_LIST,
    board,
    id
  };
};
