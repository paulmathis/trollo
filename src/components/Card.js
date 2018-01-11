// @flow
import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 7px;
  margin: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  svg {
    color: #999;
    :hover {
      color: #333;
    }
  }
`;

const Card = props => {
  return (
    <CardStyle>
      {props.name} <i className="fas fa-times" />
    </CardStyle>
  );
};

export default Card;
