// @flow

import React from 'react';
import styled from 'styled-components';
import Board from './Board';
import CreateBoard from './CreateBoard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

type Props = {
  boards: {
    byId: {
      [key: string]: {
        title: string
      }
    },
    ids: Array<string>
  },
  createBoard: (title: string) => void
};

const BoardsList = ({ boards, createBoard }: Props) => {
  const Boards = boards.ids.map(board => {
    return <Board key={board} title={boards.byId[board].title} id={board} />;
  });
  return (
    <GridContainer>
      {Boards}
      <CreateBoard createBoard={createBoard} />
    </GridContainer>
  );
};

export default BoardsList;
