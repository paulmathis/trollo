// @flow

export const CREATE_BOARD = 'CREATE_BOARD';
export const CLOSE_BOARD = 'CLOSE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

export type CreateBoardAction = { type: 'CREATE_BOARD', title: string, id: string };
export type DeleteBoardAction = { type: 'DELETE_BOARD', id: string };

let id = 0;
export const createBoard = (title: string): CreateBoardAction => {
  return {
    type: CREATE_BOARD,
    title,
    id: `board${id++}`
  };
};

export const deleteBoard = (id: string): DeleteBoardAction => {
  return {
    type: DELETE_BOARD,
    id
  };
};
