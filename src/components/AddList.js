// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Input, Label, Form, FormGroup } from 'reactstrap';

const Wrapper = styled.div`
  height: 100%;
  width: 270px;
  color: hsla(0, 0%, 100%, 0.7);
  border-radius: 3px;
  padding: 9px;
  cursor: pointer;

  /* Toggle the form on and off */
  background-color: ${props => (props.showForm ? '#e2e4e6' : 'rgba(0, 0, 0, 0.12)')};

  :hover {
    background-color: ${props => (props.showForm ? '#e2e4e6' : 'rgba(0, 0, 0, 0.4)')};
  }
  span {
    display: ${props => (props.showForm ? 'none' : 'block')};
  }
  form {
    display: ${props => (props.showForm ? 'block' : 'none')};
  }
`;

type Props = {
  board: string,
  addList: (name: string, board: string) => void
};

type State = {
  showForm: boolean,
  name: string
};

class AddList extends Component<Props, State> {
  listNameInput: HTMLInputElement;

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
        this.listNameInput.focus();
      }
    );
  };

  // Update name state on input change
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value
    });
  };

  // On submit Dispatch addList and reset internal state to defaults
  handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.addList(this.state.name, this.props.board);
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
              id="listNameInput"
              placeholder="Add a list..."
              onChange={this.handleChange}
              innerRef={input => (this.listNameInput = input)}
              value={this.state.name}
            />
          </FormGroup>
          <Button color="success">Save</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default AddList;
