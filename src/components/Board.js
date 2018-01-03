import React from 'react';
import PropTypes from 'prop-types';
import BoardButton from './BoardButton';

const Board = ({ title }) => {
  return (
    <div>
      <BoardButton>{title}</BoardButton>
    </div>
  );
};

Board.propTypes = {};

export default Board;
