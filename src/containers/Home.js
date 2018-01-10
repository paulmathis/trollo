// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import styled from 'styled-components';
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

const HomeContainer = styled(Container)`
  padding-top: 30px;
`;

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <CurrentBoards />
      </HomeContainer>
    </div>
  );
};

export default Home;
