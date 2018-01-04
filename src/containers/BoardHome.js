import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListsList from '../components/ListsList';

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

const CurrentLists = connect(mapStateToProps)(ListsList);

const BoardHome = ({ match }) => {
  return (
    <div>
      <CurrentLists board={match.params.board} />
    </div>
  );
};

export default BoardHome;
