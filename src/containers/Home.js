// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import BoardsList from '../components/BoardsList';
import { createBoard } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    boards: state.boards
  };
};

const mapDispacthToProps = (dispatch, ownProps) => {
  return {
    createBoard: title => {
      dispatch(createBoard(title));
    }
  };
};

const CurrentBoards = connect(mapStateToProps, mapDispacthToProps)(BoardsList);

const Home = () => {
  return (
    <div>
      <Container>
        <CurrentBoards />
      </Container>
    </div>
  );
};

export default Home;
