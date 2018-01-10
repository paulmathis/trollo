// @flow

import React from 'react';
import styled from 'styled-components';
import ListHome from '../containers/ListHome';
import AddList from './AddList';

const ListContainer = styled.div`
  display: flex;
`;

type Props = {
  lists: Array<{
    board: string,
    cards: Array<string>,
    id: string,
    name: string
  }>,
  board: string,
  addList: (name: string, board: string) => void
};

const ListsList = ({ lists, board, addList }: Props) => {
  const Lists = lists.map(list => {
    return <ListHome key={list.id} name={list.name} id={list.id} cards={list.cards} />;
  });
  return (
    <ListContainer>
      {Lists}
      <AddList addList={addList} board={board} />
    </ListContainer>
  );
};

export default ListsList;
