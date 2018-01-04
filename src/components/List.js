import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 270px;
  background-color: #e2e4e6;
  border-radius: 3px;
`;

const List = props => {
  const Cards = props.cards.map(card => {
    return <div key={card.id}>{card.name}</div>;
  });
  return (
    <Wrapper>
      <h1>{props.name}</h1>
      {Cards}
    </Wrapper>
  );
};

List.propTypes = {};

export default List;
