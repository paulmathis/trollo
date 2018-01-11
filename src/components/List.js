// @flow

import React from 'react';
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    svg {
      color: #999;
      font-size: 1.5em;
      :hover {
        color: #333;
      }
    }
  }
`;

export type Props = {
  cards: Array<{
    id: string,
    name: string
  }>,
  id: string,
  name: string,
  addCard: (name: string, list: string) => void
};

const List = (props: Props) => {
  const Cards = props.cards.map(card => {
    return <Card key={card.id} name={card.name} />;
  });
  return (
    <Wrapper>
      <div className="list-top">
        <strong>{props.name}</strong>
        <i class="far fa-window-close" />
      </div>
      {Cards}
      <AddCard addCard={props.addCard} list={props.id} />
    </Wrapper>
  );
};

export default List;
