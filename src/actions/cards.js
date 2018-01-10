// @flow

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export type AddCardAction = { type: 'ADD_CARD', name: string, list: string, id: string };
export type DeleteCardAction = { type: 'DELETE_CARD', list: string, id: string };

let id = 0;
export const addCard = (name: string, list: string): AddCardAction => {
  return {
    type: ADD_CARD,
    name,
    list,
    id: `card${id++}`
  };
};

export const deleteCard = (id: string, list: string): DeleteCardAction => {
  return {
    type: DELETE_CARD,
    list,
    id
  };
};
