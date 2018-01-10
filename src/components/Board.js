// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import BoardButton from './BoardButton';

type Props = {
  title: string,
  id: string
};

const Board = ({ title, id }: Props) => {
  return (
    <div>
      <Link to={id}>
        <BoardButton color="primary">
          <h4>{title}</h4>
        </BoardButton>
      </Link>
    </div>
  );
};

export default Board;
