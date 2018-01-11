// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Input, Form, FormGroup } from 'reactstrap';

const Wrapper = styled.div`
  /* background-color: rgba(0, 0, 0, 0.12); */
  height: 100%;
  width: 270px;
  /* color: hsla(0, 0%, 100%, 0.7); */
  border-radius: 3px;
  padding: 9px;
  cursor: pointer;

  :hover {
    background-color: ${props => (!props.showForm ? 'rgba(0, 0, 0, 0.2)' : 'inherit')};
  }

  /* Toggle the form on and off */
  span {
    display: ${props => (!props.showForm ? 'block' : 'none')};
  }
  form {
    display: ${props => (props.showForm ? 'block' : 'none')};
  }
`;

type Props = {
  list: string,
  addCard: (name: string, board: string) => void
};

type State = {
  showForm: boolean,
  name: string
};

class AddCard extends Component<Props, State> {
  cardNameInput: HTMLInputElement;

  state = {
    showForm: false,
    name: ''
  };

  // On button click, show the form and focus the input
  handleClick = () => {
    this.setState(
      {
        showForm: true
      },
      () => {
        this.cardNameInput.focus();
      }
    );
  };

  // Update name state on input change
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value
    });
  };

  // On submit Dispatch Card and reset internal state to defaults
  handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.addCard(this.state.name, this.props.list);
    this.setState({
      showForm: false,
      name: ''
    });
  };

  render() {
    return (
      <Wrapper onClick={this.handleClick} showForm={this.state.showForm}>
        <span>Add a list...</span>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="cardNameInput"
              placeholder="Add a list..."
              onChange={this.handleChange}
              innerRef={input => (this.cardNameInput = input)}
              value={this.state.name}
            />
          </FormGroup>
          <Button color="success">Save</Button>
          x
        </Form>
      </Wrapper>
    );
  }
}

export default AddCard;
