// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import ListsList from '../components/ListsList';
import { addList } from '../actions';
import type { Match } from 'react-router-dom';

const BoardContainer = styled(Container)`
  background-color: #0079bf;
  min-height: 100vh;
  padding-top: 30px;
`;

const mapStateToProps = (state, ownProps) => {
  // Filter out list id's that are not in the current board
  const filteredLists = state.lists.ids.filter(list => {
    return state.lists.byId[list].board === ownProps.board;
  });

  // Create an array of each list to be passed on to the ListLists
  const lists = filteredLists.map(list => {
    return state.lists.byId[list];
  });

  // Return new array
  return {
    lists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addList: (name, board) => {
      dispatch(addList(name, board));
    }
  };
};

const CurrentLists = connect(mapStateToProps, mapDispatchToProps)(ListsList);

type Props = {
  match: Match
};

const BoardHome = ({ match }: Props) => {
  return (
    <BoardContainer fluid>
      <CurrentLists board={match.params.board} />
    </BoardContainer>
  );
};

export default BoardHome;
