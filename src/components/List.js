import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import AddCard from './AddCard';

const Wrapper = styled.div`
  width: 270px;
  background-color: #e2e4e6;
  border-radius: 3px;
  height: 100%;
  margin-right: 10px;
  .list-top {
    margin-bottom: 5px;
    padding: 6px 6px 0 6px;
  }
`;

const List = props => {
  const Cards = props.cards.map(card => {
    return <Card key={card.id}>{card.name}</Card>;
  });
  return (
    <Wrapper>
      <div className="list-top">
        <strong>{props.name}</strong>
      </div>
      {Cards}
      <AddCard />
    </Wrapper>
  );
};

List.propTypes = {};

export default List;
