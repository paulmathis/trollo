import React from 'react';
import PropTypes from 'prop-types';
import BoardButton from './BoardButton';

const Board = ({ title }) => {
  return (
    <div>
      <BoardButton color="primary">
        <h4>{title}</h4>
      </BoardButton>
    </div>
  );
};

Board.propTypes = {};

export default Board;