// @flow

import React from 'react';
import styled from 'styled-components';
import ListHome from '../containers/ListHome';

const ListContainer = styled.div`
  display: flex;
`;

type Props = {
  lists: Array<{
    board: string,
    cards: Array<string>,
    id: string,
    name: string
  }>
};

const ListsList = ({ lists }: Props) => {
  const Lists = lists.map(list => {
    return <ListHome key={list.id} name={list.name} id={list.id} cards={list.cards} />;
  });
  return <ListContainer>{Lists}</ListContainer>;
};

export default ListsList;
