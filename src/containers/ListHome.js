// @flow

import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { addCard } from '../actions';
import type Props from '../components/List';

const mapStateToProps = (state, { id, board, deleteList }) => {
  const filteredCards = state.cards.ids.filter(card => {
    return state.cards.byId[card].list === id;
  });

  const cards = filteredCards.map(card => {
    return state.cards.byId[card];
  });
  return {
    cards,
    list: id,
    deleteList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCard: (name, list) => {
      dispatch(addCard(name, list));
    }
  };
};

const CurrentCards = connect(mapStateToProps, mapDispatchToProps)(List);

const ListHome = (props: Props) => {
  return <CurrentCards {...props} />;
};

ListHome.propTypes = {};

export default ListHome;
