import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Input, Label, Form, FormGroup } from 'reactstrap';
import BoardButton from './BoardButton';

const Wrapper = styled.div`
  position: relative;
  button:focus {
    outline: none;
  }
`;

const Popover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #d6dadc;
  border-bottom-color: #c4c9cc;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);

  .popover-title {
    text-align: center;
    color: #999;
    padding: 10px;
  }

  form {
    padding: 10px;
  }
`;

class CreateBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopover: false,
      title: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // On button click, show the popover form and focus the input
  handleClick() {
    this.setState(
      {
        showPopover: !this.state.showPopover
      },
      () => {
        this.titleInput.focus();
      }
    );
  }

  // Update title state on input change
  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  // On submit Dispatch createBoard and reset internal state to defaults
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
    this.setState({
      showPopover: false,
      title: ''
    });
  }
  render() {
    return (
      <Wrapper>
        <BoardButton onClick={this.handleClick}>Create new board...</BoardButton>
        <Popover hidden={!this.state.showPopover}>
          <div className="popover-title">Create Board</div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                id="titleInput"
                placeholder="&quot;Like New Hire Onboarding&quot; for example..."
                onChange={this.handleChange}
                innerRef={input => (this.titleInput = input)}
              />
            </FormGroup>
            <Button color="success">Create</Button>
          </Form>
        </Popover>
      </Wrapper>
    );
  }
}

CreateBoard.propTypes = {};

export default CreateBoard;
