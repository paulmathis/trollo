import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoardButton from './BoardButton';

const Test = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: red;
  }
`;

const CreateBoard = props => {
  function onClick() {
    console.log('etese');
  }
  return (
    <Test>
      <BoardButton onClick={onClick}>Create new board...</BoardButton>
      <div>Hello</div>
    </Test>
  );
};

CreateBoard.propTypes = {};

export default CreateBoard;
